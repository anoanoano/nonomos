# Nonomos

A new way of organizing collective action.

1. DEFINE A GROUP
Name your Action Group and add Members to it. Members are Ethereum addresses owned by people or institutions.

2. MAKE AN ACTION PROPOSAL
Float an Action Proposal to your Action Group. In effect, an Action Proposal asks each Action Group Member: "How much are you willing to pay for this action to be carried out?" Action Proposals define a total cost (in Ether) that will be sent to an Agent (another Ethereum address) to carry out the action if the Proposal passes.

3. SUBMIT A BLIND BID
Each Action Group Member submits a blind (i.e., hashed) bid on the Action Propoal, denominated in Ether. Whether or not they support the Action Proposal, they must stake real Ether to the contract to be eligible to bid.

4. REVEAL BIDS
When all eligible Members have bid on an Action Proposal, they reveal their bids.

5. PAYMENTS APPORTIONED BY VICKREY-CLARKE-GROVES MECHANISM
This is where it gets a little bit tricky, but also really awesome. Instead of simply collecting Members' bids, the smart contract collects payments corresponding to the negative externalities imposed by each Member's bid on the rest of the Action Group Members. This system, called a Vickrey-Clarke-Groves auction, incentivizes each Member to submit bids reflecting their true willingess to fund Proposals, instead of trying to freeload on others.

6. BUILD POWERFUL GROUPS, FUND REAL PROJECTS
Ether collected for a successful Action Proposal is transmitted to the Proposal's designated agent. Ether collected in excess of an Action Proposal's cost may be applied toward future proposals. If a Member owes more than she has stake to the contract, she must settle up before being allowed to bid on further Action Proposals. Members may be added to or ousted from Action Groups. The rest is up to you.
