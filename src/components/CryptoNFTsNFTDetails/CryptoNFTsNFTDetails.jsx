import React, { Component } from "react";

class CryptoNFTsNFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCryptoNFTsPrice: "",
    };
  }

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };

  render() {
    return (
      <div key={this.props.cryptoNFTs.tokenId.toNumber()} className="mt-4">
        <p>
          <span className="font-weight-bold">Token Id</span> :{" "}
          {this.props.cryptoNFTs.tokenId.toNumber()}
        </p>
        <p>
          <span className="font-weight-bold">Name</span> :{" "}
          {this.props.cryptoNFTs.tokenName}
        </p>
        <p>
          <span className="font-weight-bold">Minted By</span> :{" "}
          {this.props.cryptoNFTs.mintedBy.substr(0, 5) +
            "..." +
            this.props.cryptoNFTs.mintedBy.slice(
              this.props.cryptoNFTs.mintedBy.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Owned By</span> :{" "}
          {this.props.cryptoNFTs.currentOwner.substr(0, 5) +
            "..." +
            this.props.cryptoNFTs.currentOwner.slice(
              this.props.cryptoNFTs.currentOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Previous Owner</span> :{" "}
          {this.props.cryptoNFTs.previousOwner.substr(0, 5) +
            "..." +
            this.props.cryptoNFTs.previousOwner.slice(
              this.props.cryptoNFTs.previousOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {window.web3.utils.fromWei(
            this.props.cryptoNFTs.price.toString(),
            "Ether"
          )}{" "}
          Ξ
        </p>
        <p>
          <span className="font-weight-bold">No. of Transfers</span> :{" "}
          {this.props.cryptoNFTs.numberOfTransfers.toNumber()}
        </p>
        <div>
          {this.props.accountAddress === this.props.cryptoNFTs.currentOwner ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeTokenPriceFromApp(
                  this.props.cryptoNFTs.tokenId.toNumber(),
                  this.state.newCryptoNFTsPrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newCryptoNFTsPrice">
                  <span className="font-weight-bold">Change Token Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newCryptoNFTsPrice"
                  id="newCryptoNFTsPrice"
                  value={this.state.newCryptoNFTsPrice}
                  className="form-control w-50"
                  placeholder="Enter new price"
                  onChange={(e) =>
                    this.setState({
                      newCryptoNFTsPrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn btn-outline-info mt-0 w-50"
              >
                change price
              </button>
            </form>
          ) : null}
        </div>
        <div>
          {this.props.accountAddress === this.props.cryptoNFTs.currentOwner ? (
            this.props.cryptoNFTs.forSale ? (
              <button
                className="btn btn-outline-danger mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoNFTs.tokenId.toNumber()
                  )
                }
              >
                Remove from sale
              </button>
            ) : (
              <button
                className="btn btn-outline-success mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoNFTs.tokenId.toNumber()
                  )
                }
              >
                Keep for sale
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.accountAddress !== this.props.cryptoNFTs.currentOwner ? (
            this.props.cryptoNFTs.forSale ? (
              <button
                className="btn btn-outline-primary mt-3 w-50"
                value={this.props.cryptoNFTs.price}
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={(e) =>
                  this.props.buyCryptoNFTs(
                    this.props.cryptoNFTs.tokenId.toNumber(),
                    e.target.value
                  )
                }
              >
                Buy For{" "}
                {window.web3.utils.fromWei(
                  this.props.cryptoNFTs.price.toString(),
                  "Ether"
                )}{" "}
                Ξ
              </button>
            ) : (
              <>
                <button
                  disabled
                  style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                  className="btn btn-outline-primary mt-3 w-50"
                >
                  Buy For{" "}
                  {window.web3.utils.fromWei(
                    this.props.cryptoNFTs.price.toString(),
                    "Ether"
                  )}{" "}
                  Ξ
                </button>
                <p className="mt-2">Currently not for sale!</p>
              </>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default CryptoNFTsNFTDetails;
