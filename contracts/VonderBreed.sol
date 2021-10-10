
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.3.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.3.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/extensions/ERC721Burnable.sol";
import "./SafeMath.sol";
interface ERC721 {

    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);

    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    function balanceOf(address _owner) external view returns (uint256);

    function ownerOf(uint256 _tokenId) external view returns (address);

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory data) external payable;

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;

    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;

    function approve(address _approved, uint256 _tokenId) external payable;

    function setApprovalForAll(address _operator, bool _approved) external;

    function getApproved(uint256 _tokenId) external view returns (address);

    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}

interface ERC165 {

    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}

contract VonderBreed is ERC721, Pausable, Ownable, ERC721Burnable {

    using SafeMath for uint256;
 
    uint256 public constant maxGen0VonderNFT = 2;
    uint256 public gen0Counter = 0; 
    
    bytes4 internal constant _ERC721Checksum = bytes4(keccak256("onERC721Recevied(address,address,uint256,bytes)"));
    //check sum used to determine if a reciving contract is able to handle ERC721 
       bytes4 private constant _InterfaceIdERC721 = 0x80ac58cd;
    //checksum of function headers that are required in standard interface
    bytes4 private constant _InterfaceIdERC165 = 0x01ffc9a7;
    //checksum of function headers that are required in standard interface
    string private _name;
    string private _symbol;

    struct VonderNFT {
        uint256 genes;
        uint64 generaTime;
        uint32 MomId;
        uint32 DadId;
        uint16 generation;
    }
    
    VonderNFT[] vonderies;

    mapping(uint256 => address) public NFTOwner;
    mapping(uint256 => uint256) ownsNumberOfNFT;
    mapping(uint256 => address) public approvalOneVonderNFT; // onces create VonderNFTs is approved to be transferd by an addresss owners
    mapping(address => mapping (address => bool)) private _operatorApprovals;
    // approval to handle all tokens of an address by another
    // _operator Approvals[ownerAddress][oeratoerAddresss] = true/fals;

    // create even ERC721 are not defineed here as they are inherited from IERC721
    event VonderNFTs(address owner, uint256 NFTtokenId, uint2456 Monid,uint256 DadId, uint256 generation);

    constructor (string memory name, string memory symbol) public {
        _name = name;
        _symbol = symbol;
        _createNFT(0, 0, 0, uint256(-1), address(0));
        // VonderNFT 0 doesn't do anything, but it exits in ther mapping and arrays to avoid issues in the market place
    }

    function getContractOwner() external view returns (address contractowner) {
        return _owner;
    }

    // create function simple vonderNFT breeding and generated new NFTs to ownder and burning NFT breed.
    function breed(uint256 _dadId, uint256 _momId) external returns (uint256) {
        request(NFTOwner[_dadId] == msg.sender && NFTOwner[_momId] == msg.sender, "you can't breeding if you are not eoung NFT mom or dad");

        ( uint256 _dadGeneration) = getVonderNFTs(_dadId);
        ( int256 _momGeneration) = getVonderNFTs(_momId);

        uint256 _newGeneration;

         if (_dadGeneration <= _momGeneration) {
            _newGeneration = _dadGeneration;
        } else {
            _newGeneration = _momGeneration;
        }
        _newGeneration = SafeMath.add(_newGeneration, 1);
        return _createNFT(_momId, _dadId, _newGeneration, _newDna, msg.sender);

    }

    function createVonderNFTGen0(uint256 genes) public onlyOwner returns (uint256) {
        require(get0Counter < maxGen0VonderNFT, "maximom number of VonderNFT is reached. No new VonderNFTs allowed!!");
        gen0Counter = safeMath.add(gen0Counter, 1);
        return _createNFT(0, 0, 0, genes, mgs.sender);
    }
    
    function _createNFT(
        uint256 _momId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) internal returns (uint256) {
        VonderNFT memory _vondernft = VonderNFT({
            gense: _gense,
            generaTime: uint64(now),
            momId: uint32(_momId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
            
        });
        vonderies.push(_vondernft);
        uint256 newVonderNFTId = SafeMath.sub(vonderies.length,1); // want to start with Zero.
        _transfer(address(0), _owner, newVonderNFTId);
        emit VonderNFT(_owner, newVonderNFTId, _momId, dadId, _genes);
        return newVonderNFTId;
    }
    
    function getVonderNFTs(uint256 tokenId) public view returns (
        uint256 genes,
        uint256 generaTime,
        uint256 momId,
        uint256 dadId,
        uint256 generation)
        {
            require(tokenId < vonderies.length, "Token Id doesn't exist.");
            VonderNFT storage vondernft = vonderies[tokenId];
            genes = vondernft.genes;
            generaTime = uint256(bird.birthTime);
            momId = uint256(vondnft.momId);
            dadId = uint256(vondernft.dadId);
            generation = uint256(vondernft.generation);
        }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }


}
