/*
  =====================================================================
   PROJECT CONFIG  -  edit this file after you deploy in Remix
  =====================================================================
   1. Paste your contract addresses below.
   2. NFT artwork and certificates are JSON files uploaded to the SAME
      GitHub repo as this website. Just write the file name - the site
      turns it into the full link, for example:
      glowrist-rose-reservation.json
        -> https://rajath2424.github.io/Block-chain/glowrist-rose-reservation.json
   You can also change these from the website: click Settings (gear icon).
*/

window.APP_CONFIG = {
  // Sepolia test network. Change to 1337 / 5777 if you use Ganache.
  network: {
    chainId: 11155111,
    name: "Sepolia",
    explorer: "https://sepolia.etherscan.io"
  },

  // ---------------------------------------------------------------
  //  GLOWRIST  (florist)
  // ---------------------------------------------------------------
  glowrist: {
    gloomEuro: "0x5662C07fA46D12773cf8622D4d5f089D9034507C",   // GloomEuro.sol (ERC-20) - no need to redeploy
    preorder: "0xC14e9eA7a1C020964F59E75EDA79d5F25FA44c27",   // NEW GlowristPreorder.sol (ERC-721) address

    // Flower artwork. Pick these when you create a batch.
    // "reservation" = picture on the pre-order NFT
    // "keepsake"    = picture the customer gets after collecting
    flowerArt: [
      { label: "Red Rose - reservation", file: "glowrist-rose-reservation.json" },
      { label: "Red Rose - keepsake",    file: "glowrist-rose-keepsake.json" },
      { label: "Peony - reservation",    file: "glowrist-peony-reservation.json" },
      { label: "Peony - keepsake",       file: "glowrist-peony-keepsake.json" },
      { label: "Tulip - reservation",    file: "glowrist-tulip-reservation.json" },
      { label: "Tulip - keepsake",       file: "glowrist-tulip-keepsake.json" }
    ]
  },

  // ---------------------------------------------------------------
  //  SOCIETY CREDIT UNION  -  TRANCHORYX
  // ---------------------------------------------------------------
  society: {
    security: "0x95725B6630E2D0c3FBeCec2A4EDca7873e37D22d",   // NEW TranchoryxSecurity.sol (ERC-721) address
    interest: "0xD22035b84738B3F44A457ceEF3d50ffd8E5123C0",   // NEW TranchoryxInterest.sol (ERC-20) address

    // Your 5 certificates. The details fill the issue form automatically.
    certificates: [
      { label: "TRX-MBS-001 - Series A", file: "TRX-MBS-001.json", securityId: "TRX-MBS-001", series: "SERIES-A", faceValue: 100000, couponPercent: 6.00, paymentsPerYear: 1,  issueDate: "2025-11-20", maturityDate: "2028-11-20" },
      { label: "TRX-MBS-002 - Series A", file: "TRX-MBS-002.json", securityId: "TRX-MBS-002", series: "SERIES-A", faceValue: 250000, couponPercent: 5.75, paymentsPerYear: 2,  issueDate: "2025-11-20", maturityDate: "2030-11-20" },
      { label: "TRX-MBS-003 - Series B", file: "TRX-MBS-003.json", securityId: "TRX-MBS-003", series: "SERIES-B", faceValue: 50000,  couponPercent: 5.50, paymentsPerYear: 4,  issueDate: "2026-01-15", maturityDate: "2029-01-15" },
      { label: "TRX-MBS-004 - Series B", file: "TRX-MBS-004.json", securityId: "TRX-MBS-004", series: "SERIES-B", faceValue: 150000, couponPercent: 6.25, paymentsPerYear: 2,  issueDate: "2026-01-15", maturityDate: "2031-01-15" },
      { label: "TRX-MBS-005 - Series C", file: "TRX-MBS-005.json", securityId: "TRX-MBS-005", series: "SERIES-C", faceValue: 75000,  couponPercent: 5.25, paymentsPerYear: 12, issueDate: "2026-03-01", maturityDate: "2029-03-01" }
    ]
  }
};
