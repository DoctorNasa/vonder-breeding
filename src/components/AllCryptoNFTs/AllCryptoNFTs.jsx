import React, { useState, useEffect } from "react";
import CryptoNFTsNFTImage from "../CryptoNFTsNFTImage/CryptoNFTsNFTImage";
import CryptoNFTsNFTDetails from "../CryptoNFTsNFTDetails/CryptoNFTsNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoNFTs = ({
  cryptoNFTs,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoNFTs,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoNFTs.length !== 0) {
      if (cryptoNFTs[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoNFTs]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoNFTs's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoNFTs.map((cryptoNFTs) => {
          return (
            <div
              key={cryptoNFTs.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
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
              <CryptoNFTsNFTDetails
                cryptoNFTs={cryptoNFTs}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoNFTs={buyCryptoNFTs}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoNFTs;
