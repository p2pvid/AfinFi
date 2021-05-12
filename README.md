
# **AfinFi** 💸
P2P lending facilitator via  Affinidi SDK


#  **Problem**

Assessing the creditworthiness of users seeking credit and managing payments between multiple sources is near impossible to achieve at scale with the current system. The biggest bottleneck lies in first place at doing KYC. Borrower and lending platform has to go through 3rd party, time taking and expensive KYC process.

# **Solution**

AfinFi allows P2P lenders to see the creditworthiness of their clients and seamlessly manage the flow of data transfer between parties through a simple  API provided by Affindi SDK without worrying about the complex and error prone process for doing KYC


# **How it Works**

Initial Flowchat: https://whimsical.com/LcAiFxMRtYfpC1nxUuoTgW

• Transactions
As the first step, the user will get validated their DID KYC via Affindi SDK. This will be facilitated at AfinFi platform. Once the key is verified user can have a credit score. Data in the credit score are coming from various sources as of now, more like crowdfunding data. It can be previous transaction data, daily expenses and few others.
And these transaction data can be used by customers and corporations seeking funds to assess their creditworthiness and instantly analyze their financial wellbeing. This allows them to make enhanced data-driven decisions on the loan conditions for a potential debtor.

• Customer-to-AfinFi Lender
AfinFI can initiate bank-to-bank payments from lenders and debtors (repayment) programmatically rather than requesting wire transfers, which are cumbersome, error-prone, and therefore often delayed.

• AfinFi-to-Customer Payments (Borrower)
Lending partners can use AfinFi payment initiation services to disburse funds to debtors and at the end of the loan’s maturity back to the lender, avoiding the need to do so manually.

# ** How we built it**
We have used the Affnidi API and integrated it with our Dapp. We iterated with various way of implementations, and we settled on the latest one.

# **Challenges we ran into**
We got to know about this hack bit late. Else, we would have made much more around it.

# **Accomplishments that we're proud of**
Working Dapp integrated with Affindi API and usable functionality. We learned a lot about Affinidi SDK and business use cases.


# **About Us**

We are an ambitious, mission-driven tech startup guys with the mission to make efficient SME/individual lending in an accelerated way via Affindi SDK.

# Next Steps

- Get feedback from judges and refine it
- Apply for grants and funding



## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).




