# Solidity API

## IZkEvmV2

### StartingRootHashDoesNotMatch

```solidity
error StartingRootHashDoesNotMatch()
```

_Thrown when the starting rootHash does not match the existing state._

### ProofIsEmpty

```solidity
error ProofIsEmpty()
```

_Thrown when zk proof is empty bytes._

### InvalidProofType

```solidity
error InvalidProofType()
```

_Thrown when zk proof type is invalid._

### InvalidProof

```solidity
error InvalidProof()
```

_Thrown when zk proof is invalid._

### InvalidProofOrProofVerificationRanOutOfGas

```solidity
error InvalidProofOrProofVerificationRanOutOfGas(string errorReason)
```

_Thrown when the call to the verifier runs out of gas or reverts internally._
