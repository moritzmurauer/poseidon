const DTFactory_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "str1",
          "type": "string"
        },
        {
          "name": "str2",
          "type": "string"
        }
      ],
      "name": "concatenateStrings",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "uintToString",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_template",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "newTokenAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "templateAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenName",
          "type": "string"
        }
      ],
      "name": "TokenCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "tokenCap",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "registeredBy",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "registeredAt",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "blob",
          "type": "string"
        }
      ],
      "name": "TokenRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "instance",
          "type": "address"
        }
      ],
      "name": "InstanceDeployed",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "blob",
          "type": "string"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentTokenIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTokenTemplate",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

const DTFactory_Address = '0x1b17d75a1998b2872421a3dba2c3fad6baa1b48f';