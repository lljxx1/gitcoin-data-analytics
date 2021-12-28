
async function getGrantDetail(id) {
    const req = await fetch(`https://gitcoin.co/grants/v1/api/grant/${id}/`);
    const resp = await req.json();
    return resp;
}

async function getAllDetail(title, items) {
    const allData = []
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      const detail = await getGrantDetail(item.id);
      allData.push(detail.grants);
    }
    const tweet = `${title}\n` + allData.map((_, index) => {
        return (index+1) + `. @${_.twitter_handle_1}`
    }).join("\n");
    console.log(tweet);
    console.log(allData)
    return allData;
}

const newGrants = `Electronic Frontier Foundation	Community	https://gitcoin.co/grants/3974/electronic-frontier-foundation
ZigZag Exchange	Grants Round 12	https://gitcoin.co/grants/4352/zigzag-exchange
Longevity Prize (by VitaDAO)	Grants Round 12	https://gitcoin.co/grants/4083/longevity-prize-by-vitadao
The Blockchain Association (BA)	Grants Round 12	https://gitcoin.co/grants/4118/the-blockchain-association-ba
Kick-starting the market for future carbon	Grants Round 12	https://gitcoin.co/grants/4119/kick-starting-the-market-for-future-carbon
L2BEAT	Community	https://gitcoin.co/grants/3857/l2beat
Climate Finance DAO	Community	https://gitcoin.co/grants/4041/climate-finance-dao
Rainforest Direct	Community	https://gitcoin.co/grants/3975/rainforest-direct
Lifespan.io Meets Web3 - Crowdsourced Clinical Trials, Inverse Quadratic Funding, and You!	Community	https://gitcoin.co/grants/3998/lifespanio-meets-web3-crowdsourced-clinical-trial
RainbowDAO Protocol	dGov	https://gitcoin.co/grants/4019/rainbowdao-protocol
Just-DNA-Seq	Community	https://gitcoin.co/grants/4048/just-dna-seq
Impetus Longevity Grants	Grants Round 12	https://gitcoin.co/grants/4078/impetus-longevity-grants
The Climate Change Donation Fund by Founders Pledge	Grants Round 12	https://gitcoin.co/grants/4084/the-climate-change-donation-fund-by-founders-pled
ShowMe	NFTs	https://gitcoin.co/grants/3792/showme
RainbowWall Protocol	Community	https://gitcoin.co/grants/3814/rainbowwall-protocol
Sismo - Aggregate your private reputation to your public Ethereum profile	Grants Round 12	https://gitcoin.co/grants/4165/sismo-aggregate-your-private-reputation-to-your-p
Seaworthy Foundation	Community	https://gitcoin.co/grants/4000/seaworthy-foundation
ReFi Podcast Season One	Community	https://gitcoin.co/grants/4024/refi-podcast-season-one
Incentivizing Actions That Increase and Maintain Native Ecosystems Through Tokenization	Community	https://gitcoin.co/grants/4006/incentivizing-actions-that-increase-and-maintain-
NFTSCAN（nftscan.com）is a professional NFT asset browser and data analysis platform.	NFTs	https://gitcoin.co/grants/3633/nftscannftscancomis-a-professional-nft-asset-brow
`.split("\n").map(_ => {
    const url = _.split("\t")[2];
    if (url) {
      return {
        id: url.split("/")[4],
      };
    }
}).filter(_ => _);


// getAllDetail('New Top 20 Grants in GR12 (order by Total amount)', newGrants);


const growingFastGrants =
  `Coin Center is educating policy makers about public blockchains	Community	https://gitcoin.co/grants/1668/coin-center-is-educating-policy-makers-about-publ
The Tor Project	Infra Tech	https://gitcoin.co/grants/2805/the-tor-project
Bloom Network - Panvala League	Community	https://gitcoin.co/grants/1595/bloom-network-panvala-league
EtherDrops	dApp Tech	https://gitcoin.co/grants/1661/etherdrops
Toucan Protocol —  Carbon as a money lego	dApp Tech	https://gitcoin.co/grants/3059/toucan-protocol-carbon-as-a-money-lego
Atlantis World	dApp Tech	https://gitcoin.co/grants/3062/atlantis-world
zkCREAM: zero-knowledge Confidential Reliable Ethereum Anonymous Mixer	Infra Tech	https://gitcoin.co/grants/337/zkcream-zero-knowledge-confidential-reliable-ethe
ZeroPool - Scaling anonymous transactions for blockchains	dApp Tech	https://gitcoin.co/grants/172/zeropool-scaling-anonymous-transactions-for-block
Rotki - The portfolio tracker and accounting tool that protects your privacy	dApp Tech	https://gitcoin.co/grants/149/rotki-the-portfolio-tracker-and-accounting-tool-t
Hardhat by Nomic Labs	dApp Tech	https://gitcoin.co/grants/1592/hardhat-by-nomic-labs
CryptoFees.info	Community	https://gitcoin.co/grants/1624/cryptofeesinfo
🏗  scaffold-eth	Infra Tech	https://gitcoin.co/grants/2851/scaffold-eth
Monkey-Dagger	dApp Tech	https://gitcoin.co/grants/3012/monkey-dagger
DefiLlama	dApp Tech	https://gitcoin.co/grants/3591/defillama
BanklessDAO	Community	https://gitcoin.co/grants/2916/banklessdao
ethers.js - Complete, Simple and Tiny	Infra Tech	https://gitcoin.co/grants/13/ethersjs-complete-simple-and-tiny
The CatalanDAO - Building the first digital nation DAO!	dGov	https://gitcoin.co/grants/3386/the-catalandao-building-the-first-digital-nation-
Geo Web	NFTs	https://gitcoin.co/grants/1403/geo-web`
    .split("\n")
    .map((_) => {
      const url = _.split("\t")[2];
      if (url) {
        return {
          id: url.split("/")[4],
        };
      }
    })
    .filter((_) => _);


getAllDetail("Top Growing Faster Grants(Compare with GR11)", growingFastGrants);


const topMatchRatioGrants =
  `Longevity Prize (by VitaDAO)	Grants Round 12	https://gitcoin.co/grants/4083/longevity-prize-by-vitadao
Lifespan.io Meets Web3 - Crowdsourced Clinical Trials, Inverse Quadratic Funding, and You!	Community	https://gitcoin.co/grants/3998/lifespanio-meets-web3-crowdsourced-clinical-trial
Incentivizing Actions That Increase and Maintain Native Ecosystems Through Tokenization	Community	https://gitcoin.co/grants/4006/incentivizing-actions-that-increase-and-maintain-
OpenCures	Community	https://gitcoin.co/grants/3947/opencures
Impetus Longevity Grants	Grants Round 12	https://gitcoin.co/grants/4078/impetus-longevity-grants
Climate Finance DAO	Community	https://gitcoin.co/grants/4041/climate-finance-dao
Stopping Alzheimer's with Light and Sound	Community	https://gitcoin.co/grants/3853/stopping-alzheimers-with-light-and-sound
The Alliance for Longevity Initiatives	Community	https://gitcoin.co/grants/3945/the-alliance-for-longevity-initiatives
Ethereum Core Developer Apprenticeship Program	Infra Tech	https://gitcoin.co/grants/3468/ethereum-core-developer-apprenticeship-program
Just-DNA-Seq	Community	https://gitcoin.co/grants/4048/just-dna-seq
Rotki - The portfolio tracker and accounting tool that protects your privacy	dApp Tech	https://gitcoin.co/grants/149/rotki-the-portfolio-tracker-and-accounting-tool-t
Longevity Student Grants (by VitaDAO)	Grants Round 12	https://gitcoin.co/grants/4082/longevity-student-grants-by-vitadao
Smart Tanks: a scalable open science platform for longevity intervention testing in Daphnia	Grants Round 12	https://gitcoin.co/grants/4081/smart-tanks-a-scalable-open-science-platform-for-
Open Senolytics	Community	https://gitcoin.co/grants/3930/open-senolytics
Electronic Frontier Foundation	Community	https://gitcoin.co/grants/3974/electronic-frontier-foundation
Blockchain Infrastructure Carbon Offset Working Group (BICOWG)	Community	https://gitcoin.co/grants/3091/blockchain-infrastructure-carbon-offset-working-g
Coin Center is educating policy makers about public blockchains	Community	https://gitcoin.co/grants/1668/coin-center-is-educating-policy-makers-about-publ
Kick-starting the market for future carbon	Grants Round 12	https://gitcoin.co/grants/4119/kick-starting-the-market-for-future-carbon
DefiLab_xyz	dApp Tech	https://gitcoin.co/grants/2575/defilab_xyz
The Tor Project	Infra Tech	https://gitcoin.co/grants/2805/the-tor-project
Monkey-Dagger	dApp Tech	https://gitcoin.co/grants/3012/monkey-dagger`
    .split("\n")
    .map((_) => {
      const url = _.split("\t")[2];
      if (url) {
        return {
          id: url.split("/")[4],
        };
      }
    })
    .filter((_) => _);

getAllDetail(
  "Top Match Grants",
  topMatchRatioGrants
);