pragma solidity ^0.4.2;
pragma experimental ABIEncoderV2;

contract Healthcare {

    mapping (string => string[])  public peopleData;
    mapping (string => string[]) public docPermission;

    function addRecord (string memory id,string memory  _data) public {
        peopleData[id].push(_data);
    }

    function addPermission (string memory docid,string memory _data) public {
        docPermission[docid].push(_data);
    }

    function userDocs (string memory id) public view returns (string[] memory){
        return peopleData[id];
    }

    function docDocs(string memory  id) public view returns (string[] memory) {
        return docPermission[id];
    }
}
