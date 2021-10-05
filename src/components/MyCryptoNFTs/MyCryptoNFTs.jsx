import React, { useState, useEffect } from "react";
import CryptoNFTsNFTImage from "../CryptoNFTsNFTImage/CryptoNFTsNFTImage";
import MyCryptoNFTsNFTDetails from "../MyCryptoNFTsNFTDetails/MyCryptoNFTsNFTDetails";
import Loading from "../Loading/Loading";

const MyCryptoNFTss = ({
  accountAddress,
  cryptoNFTss,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoNFTss, setMyCryptoNFTss] = useState([]);

  useEffect(() => {
    if (cryptoNFTss.length !== 0) {
      if (cryptoNFTss[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_NFTss = cryptoNFTss.filter(
      (cryptoNFTs) => cryptoNFTs.currentOwner === accountAddress
    );
    setMyCryptoNFTss(my_crypto_NFTss);
  }, [cryptoNFTss]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoNFTs's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCryptoNFTss.map((cryptoNFTs) => {
          return (
            <div
              key={cryptoNFTs.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
                  {!loading ? (
                    <CryptoNFTsNFTImage
                      colors={
                        cryptoNFTs.metaData !== undefined
                          ? cryptoNFTs.metaData.metaData.colors
                          : ""
                      }
                    />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoNFTsNFTDetails
                    cryptoNFTs={cryptoNFTs}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCryptoNFTss;
