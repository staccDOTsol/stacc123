import { Layout, Button } from 'antd';

import ReactPlayer from 'react-player'
import React, { useCallback, useState }  from 'react';
import { MintInfo } from '@solana/spl-token';
import { Col, Divider, Row } from 'antd';
import Masonry from 'react-masonry-css';
import { Link, useParams } from 'react-router-dom';
import { AuctionListView } from './auctionList';


import { useConnection, useWalletModal, sendTransactionWithRetry, updateMetadata,getMetadata, Data, decodeMetadata,
  Metadata,
  getMultipleAccounts,
  cache,
  MintParser,
  ParsedAccount, } from '@oyster/common';
export const CANDY_MACHINE_PROGRAM_ID = new PublicKey(
  'cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ',
);
import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
  import { useLocation } from 'react-router';
import queryString from 'query-string';

import { Provider, Program, web3, BN} from '@project-serum/anchor';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_RENT_PUBKEY, TransactionInstruction, Keypair } from '@solana/web3.js';
import { MintLayout, Token } from '@solana/spl-token';
var BN2 = require('bn.js')
import FormData from 'form-data';

const CANDY_MACHINE = 'candy_machine';
import { sendTransactionWithRetryWithKeypair } from './helpers/transactions';

const programId = new web3.PublicKey(
  'cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ',
);
const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
);

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);
const TOKEN_PROGRAM_ID = new web3.PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);
const getTokenWallet = async function (wallet: web3.PublicKey, mint: web3.PublicKey) {
  return (
    await web3.PublicKey.findProgramAddress(
      [wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    )
  )[0];
};
import {

  useMeta,
  useStore
} from '@oyster/common'
import {

  PAYMENT_WALLET,
} from './helpers/constants';
import {
  chunks,
  fromUTF8Array,
  loadCache,
  parsePrice,
  saveCache,
  upload,
} from './helpers/various';
import {
  createConfig,
loadWalletKey,
  getCandyMachineAddress,
    loadAnchorProgram,

} from './helpers/accounts';
var name
var rarity 
export function createAssociatedTokenAccountInstruction(
  associatedTokenAddress: web3.PublicKey,
  payer: web3.PublicKey,
  walletAddress: web3.PublicKey,
  splTokenMintAddress: web3.PublicKey,
) {
  const keys = [
    {
      pubkey: payer,
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: associatedTokenAddress,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: walletAddress,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: splTokenMintAddress,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
  ];
  return new web3.TransactionInstruction({
    keys,
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([]),
  });
}
var name
const { Readable } = require('stream');


var ran = Math.floor(Math.random() * 10000)
if (ran <= 200){
rarity = 4 

}
else if (ran <= 700) {
  rarity = 3
}
else if (ran <= 1700){
  rarity = 2
}
else if (ran <= 3700){
  rarity = 1
}
else {
  rarity = 0
}


 var cachedContent = {"program":{'uuid': '', 'config': ''},"items":{"0":{"link":"https://arweave.net/Ub423kRNqruPNWtZIcn1IldT4vjbW9ohF2PIifQZk3I","onChain":true},"1":{"link":"https://arweave.net/4Ag-Ceqv85pxVxVUTKlpAPI7sGFXH4RD6OOf0q-f2pI","onChain":true},"2":{"link":"https://arweave.net/myi4Erq2zKPeqCMmi2zyAJae6K59P5DIjSuQAYcDtCg","onChain":true},"3":{"link":"https://arweave.net/1_V3gMMMQHzuHRjyE9OSN-VMlXOKy7RulcyvUK54hes","onChain":true},"4":{"link":"https://arweave.net/KDnG0ItxS-aG-F8vmqoXh1j7D4-cZ1Vc5SQDlDfcGMM","onChain":true},"5":{"link":"https://arweave.net/GXYyDKvdyIoAxShx_CB7Xw_qKsgIjHyE96ygKWbkKRQ","onChain":true},"6":{"link":"https://arweave.net/qC-R4RrVEmB8Sq7nrk7Kfav2ApieEwfBNPSLIvEeF1s","onChain":true},"7":{"link":"https://arweave.net/HWQBWMIcUb4ifvzWjHhgNf3Zb5ZwLL-FgReaAL_cwTU","onChain":true},"8":{"link":"https://arweave.net/Ujd7nGfXFFQbNOe0kAnh8nSn4poFFgu8F5JRRNX5UBQ","onChain":true},"9":{"link":"https://arweave.net/3lbuF-eaPRZw30UjcE16nrROXLFsNU2ut67yXyT4hxc","onChain":true},"10":{"link":"https://arweave.net/y6HITNKu6sVjB_7fjlcTS4BAGJqQt3PrrmZ4PooAexI","onChain":true},"11":{"link":"https://arweave.net/XF-lToItMfiNG4k3teowZyBkg4OnMfHy2mPlffOaCdk","onChain":true},"12":{"link":"https://arweave.net/cdraplfPJsMwfmTkhFwdfV0XSS5bz3gwE0tvLBBvGjg","onChain":true},"13":{"link":"https://arweave.net/INBXruBqpHi4wc91fm3KVBD2_fDaeFKeREv1vup9RPA","onChain":true},"14":{"link":"https://arweave.net/y-yYC1KnIDTgILdxD4y04IYMm8xMqqTDdiChMIEmlwM","onChain":true},"15":{"link":"https://arweave.net/2X_jzh7zVWs8iTrWLQivuBAbViRFcEL-ST4siyQkpj8","onChain":true},"16":{"link":"https://arweave.net/g42XB0EDfJU6SjgviAuYlwoxdWu3hOHQ4F5SaOAXjnc","onChain":true},"17":{"link":"https://arweave.net/66ajR8FaejGt06dIbSZWObFKQhGVm-RieUGyv56rFqo","onChain":true},"18":{"link":"https://arweave.net/DyCntd_HMiBb3qB_0imiaomKWrKh4ZF9vAALy675DhQ","onChain":true},"19":{"link":"https://arweave.net/4YPhMS0kCtx_49pkKPC440YKuAQ3Cy8Gqm5DnSxt2zs","onChain":true},"20":{"link":"https://arweave.net/-V9TRHlLYIhlTRn6Fu_3nYIibl6C082SxE-ObirqSnU","onChain":true},"21":{"link":"https://arweave.net/XZfGuTa7hj1QgitNjecipmieyEQ50xEOp2S9svfV-h0","onChain":true},"22":{"link":"https://arweave.net/C_rQ1iOwYqsuRMlLOi-p7sWf4RCSYxRo92iMPIF6sx0","onChain":true},"23":{"link":"https://arweave.net/4m5VNhdyt-hjmtgX_fXaJpa0iVcbJJa24JCpXhOA_1g","onChain":true},"24":{"link":"https://arweave.net/v2nlpJrvE53xki7VKnkNSLHYd-iU1QQP3J7Z44Qeb6A","onChain":true},"25":{"link":"https://arweave.net/P8zw0WXwvonNTCEGfNAneqKO3JjN9XwHtXhL-4l1LCU","onChain":true},"26":{"link":"https://arweave.net/UrMCFz8K-y2xNJDKTzUadEEPdqJcm6ZC79uNnFns_SE","onChain":true},"27":{"link":"https://arweave.net/Ynf3vrcjXk5DY-FJGFGz5mW_SVq85T3aWZ7ip6ebgt4","onChain":true},"28":{"link":"https://arweave.net/vEr1kMackplMDJ_75h7N1QCc4-IM5l_ahFPdUyOMbU4","onChain":true},"29":{"link":"https://arweave.net/LzCcPV4H7I1zKtzMLERXIBWXplxGRu_wNEeHgitriXk","onChain":true},"30":{"link":"https://arweave.net/HHP7NGXENSTXzKpPF9SKXZUt7e7LKOJZ2P2Xcpm6sxI","onChain":true},"31":{"link":"https://arweave.net/-SXN7qaqcvBdXWZWP2KkE76bAq8mpyYzh2-XPsa7WdA","onChain":true},"32":{"link":"https://arweave.net/PPcVVjM0cetpHF2R97awGsSKg46l_gUiKrJglP3GS2Q","onChain":true},"33":{"link":"https://arweave.net/7RTJX627iNnf5g3tPuUrtLKJoyJeX_ftH1di7K0iPIk","onChain":true},"34":{"link":"https://arweave.net/ORI0BFdKhMczSNiWHDKFloqmTRVtQMJdoNL4JTj3eEg","onChain":true},"35":{"link":"https://arweave.net/08yzjCPvjgOYw-rkEncYgEGa5Vx_dAs9b0WDZasNZBc","onChain":true},"36":{"link":"https://arweave.net/Hx5zvxbKBKxzMdpPie5E2WAtEl-xAXb_9eutLMcB_FY","onChain":true},"37":{"link":"https://arweave.net/gWvzczxEs7byget3D_TikPhzA_Q_bYXSPljoiqDJepY","onChain":true},"38":{"link":"https://arweave.net/-lt6xrHGvw26OfvcyG2SUapLKzWjK5ycae2sgecINck","onChain":true},"39":{"link":"https://arweave.net/eNDWekh1CfEX6JoCCuFygiTfTrh5Mkh-y8wdMAE8w7k","onChain":true},"40":{"link":"https://arweave.net/RFwyxLCdFZ6Lrd-fdF-etws0FAX6GIJy7OgL6Q-8Kq0","onChain":true},"41":{"link":"https://arweave.net/iK7gJim8LLwyUXZYIQv-cFDlrYcgOOQWZ7BNwT1kng0","onChain":true},"42":{"link":"https://arweave.net/rtCQg-f9vhWptIkigj-2t3TrcOOH6kQthJuck9Him_w","onChain":true},"43":{"link":"https://arweave.net/cEV_RRghsDUAtisNSyMuOcbEtleGhqP4y94G56Ad7YE","onChain":true},"44":{"link":"https://arweave.net/EuIbVGWHycOdngAqqzBX3sd5xhBXg-L0vJJ-cztJHnM","onChain":true},"45":{"link":"https://arweave.net/w6VXbSXaV6PeKCBDmRU382G6Dm6QgI72URBqMjujCrM","onChain":true},"46":{"link":"https://arweave.net/u8TeLoR5IxpcW-qZehzax5enztk4rxUxBkOUt3jK_rQ","onChain":true},"47":{"link":"https://arweave.net/Xx7Ltx3HITS_wQvN0oplyaMTy-sCzaWkv9EqltSup6k","onChain":true},"48":{"link":"https://arweave.net/vpXcmzDn5RLj9F24O3F3Kebx8_xZmYRxHYOinwaKaBU","onChain":true},"49":{"link":"https://arweave.net/EX2IHojNc7wNKlV6c_vYGYXMgkO3_pCrD9lkj-ZWgRI","onChain":true},"50":{"link":"https://arweave.net/Ah0HQfO2YiRMRRf4MWpJ4ispdBr7BHhbqiAsoddenng","onChain":true},"51":{"link":"https://arweave.net/-uxrjcc2NAIcvKv4km6g7L0KfTHsMzKgBq6vmzB1xQ0","onChain":true},"52":{"link":"https://arweave.net/t-fx0mQy98K5Yl8gtRnVledKRFjI7bYSa1vA9jB8Tp4","onChain":true},"53":{"link":"https://arweave.net/xekzj79uEfe-2wrvqBZLOvfqLkpUeBgOe5ZqqubXsfo","onChain":true},"54":{"link":"https://arweave.net/BcdH5Lp9jCLl-e0UrMYG2_TdJ_2tmmXcAmtyHuvbIBA","onChain":true},"55":{"link":"https://arweave.net/cqVHRGHaVqzGnf_w1l_ZcQam6THTG6D8Uf95e6FqJ78","onChain":true},"56":{"link":"https://arweave.net/nsAQBkagvokw3xK0XSWOiAHFOj41cEXLljfBdn2Y88w","onChain":true},"57":{"link":"https://arweave.net/nvgcr0gLWiZ3H2G9wU6msIOssyFHHF2cbM529DJbpCc","onChain":true},"58":{"link":"https://arweave.net/PwIlkHZuupqcI-SXRbmHLuYffezZKGAp3MUyZmo2BBY","onChain":true},"59":{"link":"https://arweave.net/tBiSaRjgAZ9Zu0sPfVuy--jWGqe3sW9hDlXeTWux0sk","onChain":true},"60":{"link":"https://arweave.net/_OkHpyKqMv0QyVYnS_wsSw_estnwdA0oVKZQQvN2jeE","onChain":true},"61":{"link":"https://arweave.net/ieLDCad--ceuM9S-5Ku2D5mRUwjcr38BUfS_09Ue6EI","onChain":true},"62":{"link":"https://arweave.net/hZ3k6GE9YJGzbjoWf2mKY7qc-ST1JHqew2NYoMSA8Bg","onChain":true},"63":{"link":"https://arweave.net/adH8egD2rzMrXLQJv_k9wzEQbYTUMFaKcubWxLmVR2E","onChain":true},"64":{"link":"https://arweave.net/Q68-wX-NsMx8Bqfz9T2u35jd1tMNj-hVnZlRUC7eF-o","onChain":true},"65":{"link":"https://arweave.net/Pt5evEhaHyVNy3PKa4aN-DKGRqlnDNKcKXcp_EsBmKs","onChain":true},"66":{"link":"https://arweave.net/oIOD4Fegd2QcELoPJGAACFu1n9LCbzYJhZFAniT2-dQ","onChain":true},"67":{"link":"https://arweave.net/GBA6hdIBetBzgeu3_Sz9_HcB4B-Q9w0fcPseeEzod9o","onChain":true},"68":{"link":"https://arweave.net/t9kcwDXEzYMpZhR_GhhSGtroDEmJbB6b9Y5ma9Z6pyc","onChain":true},"69":{"link":"https://arweave.net/BocHdAx0Zwm6Jchg0iVF_yKDUp7vXLI1Su_STliCFBw","onChain":true},"70":{"link":"https://arweave.net/bWMrLb_oBgpjDKiJJgN1UcfMKAP6qY9wNn6JGWSlwE8","onChain":true},"71":{"link":"https://arweave.net/eSVEnfkJUGdnLN_81lJCHeNUIys19j-rZb1U6JtVoPM","onChain":true},"72":{"link":"https://arweave.net/slfnhwpUqKjALL59fFCV60zdcwVSTDkYVj4zB0VtVb8","onChain":true},"73":{"link":"https://arweave.net/DI18cg4oYzfgP9iYVoUiSsn2O39Z2GkizWCEClsY6BY","onChain":true},"74":{"link":"https://arweave.net/Yuwxvir2LOgOKMZBALuwEwb8tyc9Wouu_3RnQcYVgiY","onChain":true},"75":{"link":"https://arweave.net/VMzhoR2pD3lG49v_tef_2l00O32-kVJBk1a0fwWCM-M","onChain":true},"76":{"link":"https://arweave.net/eSVHg1W5h8_HF3cOrR-RbLfjZVnG1MLp04j7dzzMSJA","onChain":true},"77":{"link":"https://arweave.net/6p2R6rd09ByDDy892YrP8DXgFTva_OYKumxHlQKWlgc","onChain":true},"78":{"link":"https://arweave.net/V2vVpSIvTpazu1Z4MHChhYLkrkw6BRmIdsfsgiUWAoo","onChain":true},"79":{"link":"https://arweave.net/LdmBRP5vCyft8W3g_n6x9Hmq3tlb5DYlJOpu1fOWFgc","onChain":true},"80":{"link":"https://arweave.net/0dp6DGx7yVDa0XT6ZtLcOTXx--3uZ3uPyI0XBO3YkyM","onChain":true},"81":{"link":"https://arweave.net/qzz6FLRIUJkiupwtpqhx1od3JP_g0YRL-maTVztoRtY","onChain":true},"82":{"link":"https://arweave.net/7KahTwcMR2cB_Ertbxlqnvp-IawvxW6moAiBrqkzAOY","onChain":true},"83":{"link":"https://arweave.net/vN55TXR-gABPzxZfQnaQ9pxwOay3kOU6ftSOCkVjt8U","onChain":true},"84":{"link":"https://arweave.net/91BLUaN1Wfy-eEl5utryixPR1YWYoucpfAIXvp_kR64","onChain":true},"85":{"link":"https://arweave.net/B82sUsli0XPVzBgkipc9nGc_h0RfwsOUmTmFPHBdD7c","onChain":true},"86":{"link":"https://arweave.net/q_xVG_kXsc99xRfJtyaDAB_fYXbxmIBz6PKkJqDOzBQ","onChain":true},"87":{"link":"https://arweave.net/h4X5gR5aGmDGpicsbFmBiNoas_IKb4lcDO9FySBYy44","onChain":true},"88":{"link":"https://arweave.net/JL86OoFXDonN1Faii4PhkU6xfSzbtz09OAtFStuKvcE","onChain":true},"89":{"link":"https://arweave.net/j4SkXNqTxtTAQ1fNb10XIvaItVOLp69wgLxmmCTJzdQ","onChain":true},"90":{"link":"https://arweave.net/I93vZve2JrjXfvEwvaxPsTKz5SMr1WF1tN3NI3ggm3M","onChain":true},"91":{"link":"https://arweave.net/ScLBXZHh-cb9YAqUgdmZK_6mTknrT3q3EXSiSxQXSNg","onChain":true},"92":{"link":"https://arweave.net/j1pX5ZnVnQ9KMTKBy1vfPQPQ8N4lAZZl01CO6iqWvrA","onChain":true},"93":{"link":"https://arweave.net/gN4rV0FQUs3fprblnrWOihhcmXQBToCAEQKjX2-2N20","onChain":true},"94":{"link":"https://arweave.net/LVOMU5mv2YqicfEdIuiIMQKzGg3C_vdsSn_rB8EC6aQ","onChain":true},"95":{"link":"https://arweave.net/Ts-xkXv3uEjeVFsQKqKzLhAoJAxQadg5jQgBpMAIkkc","onChain":true},"96":{"link":"https://arweave.net/9p3jH0k6ICZsUVnOtFG8xtFhg-itBIG-9axGf_06ivo","onChain":true},"97":{"link":"https://arweave.net/HGXjQwbsFEjokxaFqPBG6AoQC_dZpm5r-hQ0vBRgnSM","onChain":true},"98":{"link":"https://arweave.net/m9ZnMgKL7xxJ7GQ4d6UTQEpMB5WfVYuhuRal7HoW0tg","onChain":true},"99":{"link":"https://arweave.net/Oor8JWcxhTFj1XcfzFdJrGqwOrwW-Ffc9FoA3rhpf1c","onChain":true},"100":{"link":"https://arweave.net/MiuKPcRpMj0RkFsFooUNkc1tatuD2zFb8xHhTNpHLJs","onChain":true},"101":{"link":"https://arweave.net/K_Pk-zM5n0Rk4JhUj2K2M-M6urNS5rNBMbr8ML9AJLQ","onChain":true},"102":{"link":"https://arweave.net/CdXZJHeug_otOzh49UDc8Yx9InqLb1Vn-IDTcS1IG9g","onChain":true},"103":{"link":"https://arweave.net/JeJ0aOIFeJr4MbohrPoFW0aA-Xh2I5tXNhmkVoleprg","onChain":true},"104":{"link":"https://arweave.net/uRNAy-4KfLiNvtEYe-24Zm4hcHzW063t8Tb-Dk4MDMQ","onChain":true},"105":{"link":"https://arweave.net/o7Lm21zGFgiU0BKaul-UH3EPFj4hTC8DfvDVEkouV-I","onChain":true},"106":{"link":"https://arweave.net/kn_xC58jEHd8N3TEw70NjZq_3c8vJlcMn06LTeAEuG8","onChain":true},"107":{"link":"https://arweave.net/w48hTBhXvXbZjuPSPk4RuX1jDKoeYKS0QNOaFPSmZK8","onChain":true},"108":{"link":"https://arweave.net/NcYRugez0ZytR1fKOrJxrcRkD3y5czGZPkCMq8zgJ_Q","onChain":true},"109":{"link":"https://arweave.net/Ve2CMygCnGKsP16PyGK4Kbxyo4CqwjRnC9kD7ACqW-o","onChain":true},"110":{"link":"https://arweave.net/_f7L5mHSGJoA7jgOeIFflvPnOZnLuicBqYobrL86xhk","onChain":true},"111":{"link":"https://arweave.net/winnTSyorwDbluLmXK9qR7VnND9Dvo8FqULOCojKp34","onChain":true},"112":{"link":"https://arweave.net/QBghUzQsIuu7ITCmYQHQ9bD8ySCsQUaKledWZDo9GLM","onChain":true},"113":{"link":"https://arweave.net/umcHcwOxPR8KUmzfz87MLq-LpqMqxw4tP5KJJ10r7QI","onChain":true},"114":{"link":"https://arweave.net/53gG4uL2AFM-7HwFhhP2BPdV1M-rUtHlG8lPGfdZJn0","onChain":true},"115":{"link":"https://arweave.net/QNfN5nFnjHVQ8t531xG9FP1ctiS-FjmjQZOAm4JBklo","onChain":true},"116":{"link":"https://arweave.net/tw2rIsWyVzLFzn6AdUBdCYBeJ8w8Ct4sjy6s4lFTFSU","onChain":true},"117":{"link":"https://arweave.net/6rY8EAa4IaYjyesrIZ2Sn8EchCfOCVMprc9rUsULM8g","onChain":true},"118":{"link":"https://arweave.net/kkUhFB0WVNUtgfmFw6t8hN5Q3X23ZtWdgE6GCM45EB4","onChain":true},"119":{"link":"https://arweave.net/ZY_AhwX9nC7-1DTo0qj25jaNCMT1sXKYXOdhdUV_qGE","onChain":true},"120":{"link":"https://arweave.net/HU1TpFF1YVA9IskmjgRS2pDcs7tl4w0LvbLH7fZAuP0","onChain":true},"121":{"link":"https://arweave.net/0rx-K4dlmW9Hh-F9buEZ0_kSv5shLRrS2UAM0j-Ri2g","onChain":true},"122":{"link":"https://arweave.net/G0QEWb8Ax0o_nv55iO2zB9_q2qhVPengpu11yq9bw1M","onChain":true},"123":{"link":"https://arweave.net/bVbhtx-rogeaHLizI7Kyc4ESEKvhnvs2Gj-WPnKUpdw","onChain":true},"124":{"link":"https://arweave.net/gmfkiH-XdF8sCbd6gbBJ3_1n1_AAcUa3J8zzX_MLe_M","onChain":true},"125":{"link":"https://arweave.net/P8cU6iDVcNVtpY1HH9t6ggtoKjSHfRymzVTCB1IhPMg","onChain":true},"126":{"link":"https://arweave.net/EgusFDdUPGnnUB3B85N72n3B_cT6Hi-5HubICBvTCSA","onChain":true},"127":{"link":"https://arweave.net/0XiKs2LW4VHp0rDjW34fT5cuxMmuZkdATpiiT8bmvVg","onChain":true},"128":{"link":"https://arweave.net/iUtNvcl1EIXU7P8Ibj_p7_1ZuAIYxsVAq2drNVPuACU","onChain":true},"129":{"link":"https://arweave.net/u0HR62Vq75aMgFnql1ZO_x_3fWJDHHia1u5ouTv5G8I","onChain":true},"130":{"link":"https://arweave.net/kvaqBAWjEcTbUMZklB03L1W9SvLoOEYeACoNLQUf5pU","onChain":true},"131":{"link":"https://arweave.net/cLpnLVzbs0Y-Chr1G3YkQKoIg9PAIUo_GX2pvlnp_tc","onChain":true},"132":{"link":"https://arweave.net/pEYSaqBrRjsVzvrJ0o3_bFfxznzi3x6Rlk-o4dZhYo8","onChain":true},"133":{"link":"https://arweave.net/k1TTh9mGhm1Vx2H6EflzzWCcLwv6Ry36cFjPjmWIW2g","onChain":true},"134":{"link":"https://arweave.net/H50-Tk-g2u3_vO8h3vxivXBiy2Wuk7e1yg7GAKMz8RU","onChain":true},"135":{"link":"https://arweave.net/OH0orhNF4KIlhL9nIGq756HVC-AZZP25ts0Bhuxr_FQ","onChain":true},"136":{"link":"https://arweave.net/E19yqO7Ie7_E5NhU8wzt-9vmVs85-2Gjb0Jm6FRdfok","onChain":true},"137":{"link":"https://arweave.net/sQY5Txm6p7N3KwWVXN0jhDIXf3OSRX21JGzVew9mmZo","onChain":true},"138":{"link":"https://arweave.net/T-RbGK1KtkUNzsuDLFCog4fRZQUTtUE8T3BV9kJT4Lo","onChain":true},"139":{"link":"https://arweave.net/Rsu8bcpN-0ezrS7VTXDToN9dRG33xQQAHMOZbslPyuM","onChain":true},"140":{"link":"https://arweave.net/FhQ2OglqwzkyRZbAl8PgZ6IjmEqVk4vEecb2r5jFOJc","onChain":true},"141":{"link":"https://arweave.net/XWdfXpYuLtQSCC_arkd7y7I2uwiwXuJxn0BMjq2-wRI","onChain":true},"142":{"link":"https://arweave.net/kWG4q3TfuuVXJyNCz0kaTf2kw8RDev3T9FkGzY3L5rY","onChain":true},"143":{"link":"https://arweave.net/UfL_kekibX6vVfLzxaVFeCfjNpHSC4TYhQJEqcjAclk","onChain":true},"144":{"link":"https://arweave.net/YbBzz1Rvct6JMFoB5YnlAxr6KIeIBFzsA0gf9WFqGVw","onChain":true},"145":{"link":"https://arweave.net/os8QnbbLLlwA4aadn4nf1K49o-_JobsfV1gSvadtzqI","onChain":true},"146":{"link":"https://arweave.net/1mrmJ0dI7JcD6bGvfwe7TfuHtTpN9GflItLlC2YahEg","onChain":true},"147":{"link":"https://arweave.net/SYDmQOBYGIk-bV1Mvifa9C-V6COCNoCiqeowbFliGdI","onChain":true},"148":{"link":"https://arweave.net/E6dZyy7zN5nFODGking0ASF5shNskgJYFDzVMvpAA2k","onChain":true},"149":{"link":"https://arweave.net/04lnixU3uB6zF9O31JqhL4EwwMPogPTKSIcCiPGy-Pw","onChain":true},"150":{"link":"https://arweave.net/vgg3zuyqj9EOTQeIoOET1dR-2YP893D8LGTxzU9-4wE","onChain":true},"151":{"link":"https://arweave.net/5AMepmXt1OFBsmD8MnisZSe0HH1F9OSzJQ1iTEcbtH8","onChain":true},"152":{"link":"https://arweave.net/q8kQRHttPDwMDQnyxM7Miamtnw1rBYRZrfyQy8J9R1c","onChain":true},"153":{"link":"https://arweave.net/xQWL4cBSPqIldY98i8u0iYK0RuO6htu9sSZ9F8QAYoc","onChain":true},"154":{"link":"https://arweave.net/6MaLi711Tl0P4foSjmtvnsJwQ2HqZL8JJdsk-nhPAec","onChain":true},"155":{"link":"https://arweave.net/U-gw4-XF2q8IOw1BNfVnZSg0bHw9PwR3qUee4tXhUh4","onChain":true},"156":{"link":"https://arweave.net/TmyACiBdEIfHe9VQcETS7iES8eWW8dbtUr3UbQtzFEg","onChain":true},"157":{"link":"https://arweave.net/NvRlVT_LessQmfA1GNeW48IIMDUPMGW3sVVXEp9ouDI","onChain":true},"158":{"link":"https://arweave.net/kgjbrDMVAEYdwKtGc7oussXy5gC0v5CfVD2U06kQC3Y","onChain":true},"159":{"link":"https://arweave.net/-cY35XTZrJiXgypenHrvtM_KlDxsWGzBbIvkWIGvsnU","onChain":true},"160":{"link":"https://arweave.net/iA0p9L5j8C_eCb_jvIDoGtzfhllqVSCWP0NuVT4gYO0","onChain":true},"161":{"link":"https://arweave.net/FediS-m9XtHj-iKfGskkjqv4HEsq3cUJbKqn4wdmcVg","onChain":true},"162":{"link":"https://arweave.net/dUKFChp-uxwm9FjOCPI4uPHBx5d44TviT_FJhkQmhNQ","onChain":true},"163":{"link":"https://arweave.net/ixwmZ3Knclt9L-UR1JefATOJpU1qm1oGZaHWoNj2FyA","onChain":true},"164":{"link":"https://arweave.net/bq9G1dS4zeFEwSwszJWN8kC4Omj3laDuUPkZfuPVdVA","onChain":true},"165":{"link":"https://arweave.net/T-rGHtP5ATm5trmFKKUBDWDJQXwLPL2J0ZeWV_Z6LY8","onChain":true},"166":{"link":"https://arweave.net/Nnvh--mXhn2F-txTGl3cYEz3OzDu8lWT79PNcNVV8Co","onChain":true},"167":{"link":"https://arweave.net/YZvIVDu8wCSZjtqfuyi4XjYS7smhARKvqdm1lj35xyw","onChain":true},"168":{"link":"https://arweave.net/np1v3j43rMEu6XzzlL816zDqjjoGkWnYSgf3d_Pgtg4","onChain":true},"169":{"link":"https://arweave.net/nhiqwCBOmbyHAzild7Y8_Uo1GB4xfaDHqUx_Fg_UhTg","onChain":true},"170":{"link":"https://arweave.net/_iVAgb7i0XYSQcciXcstkNYoY_QZUdtz1GMN8mzT0N8","onChain":true},"171":{"link":"https://arweave.net/2WbkIt9EkwDNv0RS-9ET1aZDovVLk_is10UZpzO1_tc","onChain":true},"172":{"link":"https://arweave.net/goaOvAMSCW5h1pUL4NtQ1O42Ecv4cFFr06rTvefMx9o","onChain":true},"173":{"link":"https://arweave.net/zgOmoxVXSvR_XpZuyMtm1iP1OUBCuzwLiWbijC2qhC0","onChain":true},"174":{"link":"https://arweave.net/iMyQpIS4mARoT3b56Sd5UjXVVRcS0E1SJWm7TLHAlQA","onChain":true},"175":{"link":"https://arweave.net/szsw_qZ4b7PvFDk8G4aV1ZoEIruZtwjT2k3-RBY3mVM","onChain":true},"176":{"link":"https://arweave.net/9LxlAwltBlQtDNwm7k7-fk_leH8SMdhaE-oG4UJUIek","onChain":true},"177":{"link":"https://arweave.net/PhfGGqmCGx4AAe66nm0khtIF7u-qHq5hdQU8UsnHPSs","onChain":true},"178":{"link":"https://arweave.net/HUhH060NGOKCTbJj43OalfuSnoi6-TsXCcRuV6bdV7M","onChain":true},"179":{"link":"https://arweave.net/uK1Zde-uJPbnPO9GpoWYfz-XgKltncGlfDTN3cwsX8A","onChain":true},"180":{"link":"https://arweave.net/77k_N99RhVz5iEnPhBVcGyLH-ciuLZIblw-MaJhH29I","onChain":true},"181":{"link":"https://arweave.net/Hvt7Zg_ko3kN5lGnhEo_9ErcuKNuNMxHZZw5r6V5sqc","onChain":true},"182":{"link":"https://arweave.net/wDtjgpYcT_T7mNLvC4pbAHexBeET_2NMk2j7yuKNbio","onChain":true},"183":{"link":"https://arweave.net/zT0-A97cgdorvk0wt5lSXOmyWb08wskR6WjQIu256Rs","onChain":true},"184":{"link":"https://arweave.net/j1r0KXHiu4CI6QhbuycrGPaHEKfH5ZX5kFjT9SAoPEg","onChain":true},"185":{"link":"https://arweave.net/CvfzzNshXohTNv_9UMQvTELogMd8XMyFRoSXw22KgAg","onChain":true},"186":{"link":"https://arweave.net/PjDybLdoapuFpeDcW8OsCMY2jMjDay_wmICWk18vJkk","onChain":true},"187":{"link":"https://arweave.net/azQhrDNF6M7D-0ZiaiGAhlAVx301pzVh87-NsntKbDI","onChain":true},"188":{"link":"https://arweave.net/3lZBBH-G1dIrr1BdoC31BARDr0N0vt98WHniEuLnAjo","onChain":true},"189":{"link":"https://arweave.net/16aaPEKODvFp5_hfdfO6aZW4s2Ib1uyajgAAkva4lvQ","onChain":true},"190":{"link":"https://arweave.net/XETRLOeAShxvUYdTqwew-6G7Y0BCwy33iawQafB29Og","onChain":true},"191":{"link":"https://arweave.net/tjCwKD7R12z2wSW8Vvf8fftwA-Ff5f4C55i_nVYGGZs","onChain":true},"192":{"link":"https://arweave.net/RY62taddZ0AB3J3eKNpiDOzUjlauxm0GjxejLli9aLY","onChain":true},"193":{"link":"https://arweave.net/mg3hXeWXKfliogt7c7lTc5UrARyzS0NdJ3hyhiFwncg","onChain":true},"194":{"link":"https://arweave.net/urEa7WZRsG-CHyI05nVfIoPps_tmb_f2-FRkdACLV9M","onChain":true},"195":{"link":"https://arweave.net/vy2_N2lwq9ZSq4586jDKRBJN4weqTFNAnqpB6qS62Vw","onChain":true},"196":{"link":"https://arweave.net/TvZkWhcV_hKdY7V4WHWZh-ZtBkED8eulYX12Iflw414","onChain":true},"197":{"link":"https://arweave.net/FETebHYzOVhh0pO3B35UBMKQjo4S1_I8CrGh-R5rvpY","onChain":true},"198":{"link":"https://arweave.net/JSYjIZ_d1c2uSNzwPvDrIevKBdCGKLrelj1zysg4KeE","onChain":true},"199":{"link":"https://arweave.net/3zLALwZp_YrgnG3omrCEv7-s7ZbjXSjhiL7MhtySVEM","onChain":true},"200":{"link":"https://arweave.net/Yru0t0hahvCuyKzDBdjpTzJR_XU-6IR_aWZ66w70Jzk","onChain":true},"201":{"link":"https://arweave.net/Q7d1zHmB4h4MrGGWkAP3qoEDsn5-mSDxq2FDxQxDi1I","onChain":true},"202":{"link":"https://arweave.net/7HxpQUqodte7NXtfEMw2uvx-47Avf5_lf-nFIYoldVg","onChain":true},"203":{"link":"https://arweave.net/eRjRKeDZRhPdK20zh5etO97X_kzLe_oTaVpfsfSXnEA","onChain":true},"204":{"link":"https://arweave.net/3qX6NC5z_EuzjCJY5VaCkfN0QBwJo4DTWi-AMBzukXI","onChain":true},"205":{"link":"https://arweave.net/aaFnKlJfbV4u-JjGMXA6SIKgET6L7kdVSYh6kxnWivA","onChain":true},"206":{"link":"https://arweave.net/XFy_0JZOhjt36thcYQ584svJZbZRlCbKzltDZTcbsH0","onChain":true},"207":{"link":"https://arweave.net/lbGviVxskgakcpgvdHkgjjOzjt2MTPs0zcFC-7JF7bM","onChain":true},"208":{"link":"https://arweave.net/jH-RndH37VbBhIPmzgpvfQrWmQm0JuVfhRDA_2WEetY","onChain":true},"209":{"link":"https://arweave.net/V6hCSk93_jm9an-Bo4qjtOsvDpMmTgngniMhkwn3dQo","onChain":true},"210":{"link":"https://arweave.net/XCckRulHFxu-p6MN5X5QCkv1AuvhNNOOwZtkqRETjb8","onChain":true},"211":{"link":"https://arweave.net/Ao0vGwQhXBS4oM2VBF4PrtKAJiPBGJt1Bsz0aTrVzhY","onChain":true},"212":{"link":"https://arweave.net/7Mfs_mVxr2tTnd68WadKjKopt1uKNXrYo1zap-zgYvM","onChain":true},"213":{"link":"https://arweave.net/qPo2E0MCid-kPRuo12GaLDa997IgzpFgU7TL1K-zolQ","onChain":true},"214":{"link":"https://arweave.net/oPyB_txhEZYnxJQU8zEA00UF0BXBybobp2_dFhnQuLk","onChain":true},"215":{"link":"https://arweave.net/PyeOZhsobIp3FP9Dd9n0sr51IbT8rVoH3YfEHjiAnoE","onChain":true},"216":{"link":"https://arweave.net/DjZk0cAC5BYJ1EGVfVpSjos8zJBQxOxDvoc2FXVl4jg","onChain":true},"217":{"link":"https://arweave.net/0762A-qDtqewjawrCuaEU3PmvSIFxmtcdUiQ58cioYo","onChain":true},"218":{"link":"https://arweave.net/CZu6hbiNM1yFvltsY6BByThidsY0xy6vc4zRGjFgXEA","onChain":true},"219":{"link":"https://arweave.net/1j0RxdeKY7Ia2vAHiK8mvUv6TwyromYN4CrpLC2tovk","onChain":true},"220":{"link":"https://arweave.net/M4cO6PT_dwkhcJ9RBllCSHITdVevlvdyjoW7I-cIwj8","onChain":true},"221":{"link":"https://arweave.net/yFxntTFnAZdGV4ALClfJ33NJqRZwVf2zNjC9mhpdUW0","onChain":true},"222":{"link":"https://arweave.net/y03tFfj5VLMrTk48lroqgQKqKzEy3PX8hH1I2DC2SWw","onChain":true},"223":{"link":"https://arweave.net/ZiZ25aUPE0bHHrruczeQi_aw5asVDyxqDmaotsCPmdM","onChain":true},"224":{"link":"https://arweave.net/LZ9jmntCwSjF2An4qbmmeg1qFxTvY2d8hd93Tj6LVmI","onChain":true},"225":{"link":"https://arweave.net/vXgskXM235AwxnGibSywZAQ2rfEiWocVk5CbFVk4p3Y","onChain":true},"226":{"link":"https://arweave.net/y07Wh4I3gGfjlVy6I8X8QZc1xTjv4WeoIZWEOrA2rhM","onChain":true},"227":{"link":"https://arweave.net/63hZgud21cAW0F2ZCvx52VmgPwf3qRH_8vh7FepoVeE","onChain":true},"228":{"link":"https://arweave.net/4ha22pb-eiJZLE7qmC2qYoSMIYzsUa146Z9WpC8SCK0","onChain":true},"229":{"link":"https://arweave.net/RNMNBw5CEyTEL0mu1iL3S81pZegqjraStmiFR7SxTGg","onChain":true},"230":{"link":"https://arweave.net/IEkePkBL54aY5uMGdvZWzHM28nDll6hFIhtRFmWvsUY","onChain":true},"231":{"link":"https://arweave.net/w5mrfPsr5L83QBB9-EXzga8cxzBeCOHIkzB5tCWHdKU","onChain":true},"232":{"link":"https://arweave.net/CIv8CbVg2ZByTfn40TqiqR2-vpOaOjpU1vAEUMHbdBI","onChain":true},"233":{"link":"https://arweave.net/31HE_sG27LrsIMt7zFZBODGAiquHNKSq7QZRECuFlDA","onChain":true},"234":{"link":"https://arweave.net/pM8GfRj4pgNCcr_wTxFiD10zVVjtL_4VJX7TyoarQWo","onChain":true},"235":{"link":"https://arweave.net/LCcrnaeIpFHOVd-IJeKqXNUM1Xl8VyLm51HKJnEoJhA","onChain":true},"236":{"link":"https://arweave.net/zQabbsM-Nraf7ohoBpBGGImKWYvhXhQVFEx7SwovV0E","onChain":true},"237":{"link":"https://arweave.net/QLEFZx-IUEn7vE_V-7Wuyxt1vqhRrFnqdyBn2OibqJk","onChain":true},"238":{"link":"https://arweave.net/uuNf7HZcbiui348Gx7srHrS35kRJxN65POXTsmOjBJw","onChain":true},"239":{"link":"https://arweave.net/a8fnFpejkHvJQMrrq1Z7LGAtVBQeFmm6tSWm1LwpKTg","onChain":true},"240":{"link":"https://arweave.net/npirHk4jP6Xz44kDZy07LYSIOvsbl_fZrEHQf3nz8O0","onChain":true},"241":{"link":"https://arweave.net/ODkhBuyN8nviWBWbfVAW5-kZpZg_jdOYJeKw-rIsIkQ","onChain":true},"242":{"link":"https://arweave.net/1g0QKzIrlq7LUd6ZU8Vi_pdDtxaSgasDe7dEOGTNlGk","onChain":true},"243":{"link":"https://arweave.net/ZenFNqhK_6rF13myE7-Nr5wQc-_JQmNSEKQoI4BOhMQ","onChain":true},"244":{"link":"https://arweave.net/eK-yMu85zJAhTSwAGeZLATiO3BS_XPh6uSGs5bHL168","onChain":true},"245":{"link":"https://arweave.net/cfn7FTS72CyYDCioNMW0x66BZ6NXZUztCiCACj6vI4I","onChain":true},"246":{"link":"https://arweave.net/6jrapGgWv9Eeo55aWQsfImahIPMQq_KpeHoAucYqF18","onChain":true},"247":{"link":"https://arweave.net/GnwiU-VRqdJgVn_xVKPoPz-Uo-o-UtwBRRCYsvFr5Ns","onChain":true},"248":{"link":"https://arweave.net/t2AunpKkxvY7aSbmSNfIZf-yPmpRO3uTgdeyRF7Al6g","onChain":true},"249":{"link":"https://arweave.net/T2vr2eSVGejGcC-RPH7zOlJmdeWkMrS_vIdAeYioSmc","onChain":true}}}



var link
async function oulala(connection,sex, sfbb, wallet){
  ran = Math.floor(Math.random() * 10000)
      if (ran <= 200){
rarity = 4 

}
else if (ran <= 700) {
  rarity = 3
}
else if (ran <= 1700){
  rarity = 2
}
else if (ran <= 3700){
  rarity = 1
}
else {
  rarity = 0
}
      var walletKeyPair = loadWalletKey('./jarekey.json');
      const image = ran.toString() + '.png'
      //const imageName = path.basename(image);
      const index = ran.toString()

      console.log(`Processing file: ${index}`);

      const storageCost = 10;

        const manifestPath = ran.toString() + '.json'
        

   var response = await fetch('https://stacc.art/img/' + sex + '/' +(ran.toString()) + '.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

   const manifestContent = await (response.text()) 
   var response = await fetch('https://stacc.art/img/' + sex + '/' +(ran.toString()) + '.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

   var manifest = await (response.json()) 
   manifest.symbol = "STACC"
   manifest.seller_fee_basis_points = sfbb
  // console.log(manifest)
        const manifestBuffer = Buffer.from(JSON.stringify(manifest));
const bytes = new TextEncoder().encode(JSON.stringify(manifest));
const mblob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});

         var response2 = await fetch('https://stacc.art/img/' + sex + '/' + (ran.toString()) + '.png', {
      method: 'GET',
      headers: {
        'Accept': 'image/png',
        'Content-Type': 'image/png',
      },
    })

         const lala123 = await (response2.blob());

          const instructions = [
            web3.SystemProgram.transfer({
              fromPubkey: wallet.publicKey,
              toPubkey: PAYMENT_WALLET,
              lamports: storageCost,
            }),
          ];        
           var anchorProgram = await loadAnchorProgram(connection, wallet, 'mainnet-beta');


          const tx = await sendTransactionWithRetry(
            anchorProgram.provider.connection,
        wallet,
        instructions,
        [],
        'single',
          );
          console.info('transaction for arweave payment:', tx);
//console.log(manifest)
          // data.append('tags', JSON.stringify(tags));
          // payment transaction
          const data = new FormData();
          data.append('transaction', tx['txid']);
          data.append('env', 'mainnet-beta');
          data.append('file[]', lala123,  `image.png`);
          data.append('file[]', mblob, 'metadata.json');
          try {
            const result = await upload(data, manifest, index);

            const metadataFile = (result as any).messages?.find(
              m => m.filename === 'manifest.json',
            );
            if (metadataFile?.transactionId) {
              link = `https://arweave.net/${metadataFile.transactionId}`;
            }
            //let rarity// parseFloat(manifest.attributes[0].value)
            name = manifest.name
            cachedContent.items[index] = {
              link,
              name: manifest.name,
              onChain: false,
            };
          } catch (er) {
            console.error(`Error uploading file ${index}`, er);
          }
        }
const getCandyMachine = async (config: web3.PublicKey, uuid: string) => {
  return await PublicKey.findProgramAddress(
    [Buffer.from(CANDY_MACHINE), config.toBuffer(), Buffer.from(uuid)],
    programId,
  );
};

const getMetadata3 = async (
  mint: web3.PublicKey,
): Promise<web3.PublicKey> => {
  return (
    await web3.PublicKey.findProgramAddress(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID,
    )
  )[0];
};


const getMetadata2 = async (
  mint: web3.PublicKey,
): Promise<web3.PublicKey> => {
  return (
    await web3.PublicKey.findProgramAddress(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID,
    )
  )[0];
};

const getMasterEdition = async (
  mint: web3.PublicKey,
): Promise<web3.PublicKey> => {
  return (
    await PublicKey.findProgramAddress(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from('edition'),
      ],
      TOKEN_METADATA_PROGRAM_ID,
    )
  )[0];
};
 const walletKeyPair = loadWalletKey('./jarekey.json');
var first = true
const endTs = 1631487097586 + 1000 * 60 * 60 * 24 * 14
  const startTs = 1631343043313 
  const nowTs = endTs - (new Date().getTime())// - startTs
  const hours =  Math.floor( 100 * nowTs / (1000 * 60 * 60)) / 100
  console.log(hours)
  const nowTs2 = endTs - 1000 * 60 * 60 * 24 * 7 - (new Date().getTime())// - startTs
  const hours2 =  Math.floor( 100 * nowTs2 / (1000 * 60 * 60)) / 100
  console.log(hours2)
  var response11 
var price = 0.022

         var lala = Math.floor(Math.floor(Math.random() * 100))
      var        sfbb = Math.floor(Math.floor(Math.random() * (10000 - 100)) / (rarity + 1) ) + 100
sfbb = sfbb / 4
var jarekey = new PublicKey("F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj")
/*
const metaplex = new MetaplexAPI({
    endpoint: 'https://solana-api.projectserum.com'
})
*/
export const HomeView = () => {

  const [numberm, onChangeNumberm] = React.useState(1);
async function onChangeNumberm2(e){
    onChangeNumberm(e.target.value)
}
/**
 * Pass in the Solana RPC endpoint you would like to use and use the default settings
 */


                
    const [atime, updateTimer] = useState(hours);
    const [atime2, updateTimer2] = useState(hours2);

    const [shouldHide, updateHide] = useState(false);
  const [shouldHidef, updateHide2] = useState(false);

  const [information, updateInformation] = useState(":).");
 
  const [information2, updateInformation2] = useState('gm! :D!');

async function aaaaa(){
  if (first){
// var response12 = await fetch('https://711a2d1c8a1b.ngrok.io/count')
//response11 = await (response12.text())
var response11 = "0"
             price = 0.022//(Math.floor(10000 * 0.00015 * parseFloat(response11)) / 10000) + 0.022//.01//(Math.floor((Math.random() * 1000) * days) / 1000) + 0.05
 console.log(price)
 console.log('aaah')
//updateInformation2(response11 + " of 3448 minted so far this generation!");
 
  if (parseFloat(response11) > 3448){

updateHide(false)
updateHide2(false)
  }
  else {

    updateHide(true)
    updateHide2(true) 
  }
first = false
}
}

const queryExtendedMetadata = async (
  connection: Connection,
  mintToMeta: Record<string, ParsedAccount<Metadata>>,
) => {
  const mintToMetadata = { ...mintToMeta };

  const mints = await getMultipleAccounts(
    connection,
    [...Object.keys(mintToMetadata)].filter(k => !cache.get(k)),
    'single',
  );

  mints.keys.forEach((key, index) => {
    const mintAccount = mints.array[index];
    if (mintAccount) {
      const mint = cache.add(
        key,
        mintAccount,
        MintParser,
        false,
      ) as ParsedAccount<MintInfo>;
      if (!mint.info.supply.eqn(1) || mint.info.decimals !== 0) {
        // naive not NFT check
        delete mintToMetadata[key];
      } else {
        // const metadata = mintToMetadata[key];
      }
    }
  });

  // await Promise.all([...extendedMetadataFetch.values()]);
  const metadata = [...Object.values(mintToMetadata)];

  return {
    metadata,
    mintToMetadata,
  };
};

 aaaaa()

setInterval(function(){
aaaaa()
  if (Math.floor( 100 * (endTs - (new Date().getTime())) / (1000 * 60 * 60)) / 100 < 0){

updateHide(true)
updateHide2(true)
  }
updateTimer(Math.floor( 100 * (endTs - (new Date().getTime())) / (1000 * 60 * 60)) / 100)
updateTimer2(Math.floor( 100 * (endTs - 1000 * 60 * 60 * 24 * 7 - (new Date().getTime())) / (1000 * 60 * 60)) / 100)
}, 3 * 60 * 1000)
   const wallet = useWallet();
   var astring
   if (ran > 6700){
    astring = "https://solana-api.projectserum.com"
   }
   else if (ran > 3300){
    astring = "https://solana-api.projectserum.com"
   } 
   else {
    astring = 'https://solana--mainnet.datahub.figment.io/apikey/fbb4f00427594e23bfb341c060e6348a'
   }
   //astring = "https://fragrant-bitter-sound.solana-mainnet.quiknode.pro/8a6cee2a1b6d44f3ad57a2fbd3af1be61defc820/"
  const connection = new Connection(astring, 'recent');//useConnection();

  const { setVisible } = useWalletModal();


  // This is from the .cache directory after uploading, copy yours here without "items"
  

 //SCEN2 TODO: const walletKeyPair = loadWalletKey(keypair);

    const mint2 = async ({wallet, connection}:  {wallet: WalletContextState, connection: Connection}) => {
         console.log('lala2')
        
updateHide(false);

  updateHide2(false);

    // Set price here to the same you specified when setting up candy mashine
        for (var indexcount = 0; indexcount < numberm; indexcount++){

    const lamports =  0.044 * LAMPORTS_PER_SOL;

    const mint = web3.Keypair.generate();

    if (wallet && wallet.wallet && wallet.publicKey) {
      const token = await getTokenWallet(wallet.publicKey, mint.publicKey);
      console.log(token.toBase58())
      const provider = new Provider(connection, {
        ...wallet.wallet,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
        publicKey: wallet.publicKey
      }, {
        preflightCommitment: 'recent',
      });
      const idl = await Program.fetchIdl(programId, provider);
const anchorProgram2 = new Program(idl, programId, provider); 
const anchorProgram = await loadAnchorProgram(connection, walletKeyPair, 'mainnet-beta');


//const { keypair, env, price, cacheName }  cmd.opts();
    const lamports = parsePrice(0.044);
 //     const config = new web3.PublicKey(cachedContent.program.config);

/*

*/
//1000
let ourConfig ={"uuid":"7ciDc5","config":"7ciDc5giNdhHfpZw5gzxu6guzFEJNaELM8V9jgmwYKmC"}
     //2350
	 ourConfig = {"uuid":"75F4AE","config":"75F4AE7nPQe1wvzyfwWi2zE8oTH5UJQ6VYQLKxRf8VQ7"}
     ourConfig =  {"uuid":"79GJpp","config":"79GJppSL4hj7NyVEMF2K5qMSjEUS1JvsSBJKpni6r9ko"}
	 let config = new PublicKey(ourConfig["config"])
     var  [candyMachine, bump] = await getCandyMachine(
        config,
        ourConfig["uuid"],
      );
      const candy = await anchorProgram2.account.candyMachine.fetch(candyMachine);

      if ((candy as any)?.itemsRedeemed?.toNumber() - (candy as any)?.data?.itemsAvailable?.toNumber() === 0) {
        alert('All NFTs have been sold');
updateInformation("Try again, error...")
      }

      const metadata = await getMetadata2(mint.publicKey);
      const masterEdition = await getMasterEdition(mint.publicKey);
      
const bh = 
                                              await (connection.getRecentBlockhash() )
                

    const tx = await anchorProgram2.rpc.mintNft({
    recentBlockhash: bh.blockhash,
    feePayer:wallet.publicKey,  
        accounts: {
          config: config,
          candyMachine: candyMachine,
          payer: wallet.publicKey,
          //@ts-ignore
          wallet: candy.wallet,
          mint: mint.publicKey,
          metadata,
          masterEdition,
          mintAuthority: wallet.publicKey,
          updateAuthority: jarekey,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent:SYSVAR_RENT_PUBKEY,
          clock:SYSVAR_CLOCK_PUBKEY,
        },
        signers: [mint, walletKeyPair],
        instructions: [
          web3.SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            newAccountPubkey: mint.publicKey,
            space: MintLayout.span,
            lamports: await provider.connection.getMinimumBalanceForRentExemption(
              MintLayout.span,
            ),
            programId: TOKEN_PROGRAM_ID,
          }),
          Token.createInitMintInstruction(
            TOKEN_PROGRAM_ID,
            mint.publicKey,
            0,
            wallet.publicKey,
            wallet.publicKey,
          ),
          createAssociatedTokenAccountInstruction(
            token,
            wallet.publicKey,
            wallet.publicKey,
            mint.publicKey,
          ),
          Token.createMintToInstruction(
            TOKEN_PROGRAM_ID,
            mint.publicKey,
            token,
            wallet.publicKey,
            [],
            1,
          ),
        ],
      });

    console.log(tx)
/*
    var response = await fetch('https://711a2d1c8a1b.ngrok.io/?txid=mint2-' + new Date().getTime().toString() + '-' + token.toBase58(), {
      method: 'GET'
    })
  */
     lala = Math.floor(Math.floor(Math.random() * 100))

       sfbb = Math.floor(Math.floor(Math.random() * (10000 - 100)) / (rarity + 1) ) + 100
    sfbb = sfbb / 4
    updateInformation('See digitaleyes.market for your NFT, this is the '+ (indexcount + 1).toString() + ' of ' + numberm.toString()  + ' you are minting :) ')
}
    } 
  }
    const mint = async (sex, {wallet, connection}:  {wallet: WalletContextState, connection: Connection}) => {
         console.log('lala')
         aaaaa()
updateHide(false);

  updateHide2(false);
//alert('Mewn! You\'ve performed a click, padawan. Patience...')
updateInformation("Uploading...")
if (wallet.publicKey == referral){
  referral = new PublicKey("9QgEj7NunthrrsaLxKkEdhcpnLtwnwAUZn6J8XdZGco2")

}
    // Set price here to the same you specified when setting up candy mashine
   
    const lamports =  price * LAMPORTS_PER_SOL;

    const mint = web3.Keypair.generate();

    if (wallet && wallet.wallet && wallet.publicKey) {
      const token = await getTokenWallet(wallet.publicKey, mint.publicKey);
      console.log(token.toBase58())
      const provider = new Provider(connection, {
        ...wallet.wallet,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
        publicKey: wallet.publicKey
      }, {
        preflightCommitment: 'recent',
      });
      const idl = await Program.fetchIdl(programId, provider);
const anchorProgram2 = new Program(idl, programId, provider); 
const anchorProgram = await loadAnchorProgram(connection, walletKeyPair, 'mainnet-beta');


//jareedits

//initialize config
         //alert(`initializing config.. patience`);
         updateInformation("Uploaded...")
       //  const walletKeyPair = loadWalletKey('./jarekey.json');
         var item = cachedContent.items[ran.toString()]
         
         cachedContent.items['0'] = item

//         const anchorProgram = await loadAnchorProgram(wallet, 'mainnet-beta');

            //const walletKeyPair = (wallet);
let creators
if (referral){
creators = [//{
              {
                  address: new PublicKey("F9Z3JWZhBmChENpmg96y7q6YBzu4eky9EYDByDzHPdbS"),
                  share: Math.ceil((100 - lala - 25)),
                },{
                address: wallet.publicKey,
                  share: Math.ceil((lala + 25)* 0.75)}
                  ,{
                address: referral,
                  share: Math.floor((lala + 25) * 0.25)
                    
                  },

                ]
}
else {
             creators = [//{
              {
                  address: new PublicKey("F9Z3JWZhBmChENpmg96y7q6YBzu4eky9EYDByDzHPdbS"),
                  share: Math.ceil((100 - lala)),
                },{
                address: wallet.publicKey,
                  share: Math.ceil((lala))}
                  ,

                ]
      }
                console.log(creators)
                console.log(sfbb)

  await  oulala(connection,sex, sfbb, wallet)
          //alert('patience.. uploaded file')
          updateInformation("Initializing...")
const res = await createConfig(anchorProgram, wallet.publicKey, walletKeyPair, {//SCEN2 TODO: walletKeyPair.publicKey
              maxNumberOfLines: new BN2(1),
              symbol: 'STACC',
              sellerFeeBasisPoints: sfbb,
              isMutable: true,
              maxSupply: new BN(0),
              retainAuthority: true,
              creators: creators.map(creator => {
                return {
                  address: (creator.address),
                  verified: true,
                  share: creator.share,
                };
              }),
            });
            cachedContent.program.uuid = res.uuid;
            var uuid = res.uuid;
            cachedContent.program.config = res.config.toBase58();
          var  config = new PublicKey(res.config.toBase58())


          console.log('config: ' +  config.toString())
            //alert(
           //   `patience, initialized config for a candy machine with uuid: ${res.uuid}`,
           // );
updateInformation("Initialized...")

var date = "04 Dec 1995 00:12:00 GMT"
    const secondsSinceEpoch= (date ? Date.parse(date) : Date.now()) / 1000;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var [candyMachine, bump] = await getCandyMachineAddress(
      config,
      uuid,
    );
          await anchorProgram.rpc.addConfigLines(
                    0,
                    [{
                      uri: link,
                      name: name,
                    }],
                    {
                      accounts: {
                        config,
                        authority: jarekey,//SCEN2 TODO: walletKeyPair.publicKey??
                      },
                      signers: [walletKeyPair],//SCEN2 TODO: [walletKeyPair] // .publicKey??
                    },
                  );
          //alert('patience! we added our config line...')

updateInformation("Added upload to config...")
       //     saveCache(cacheName, env, cachedContent);
         
//const { keypair, env, price, cacheName }  cmd.opts();
    const lamports = parsePrice(price);
//   const cachedContent = loadCache(cacheName, env);

//    const walletKeyPair = loadWalletKey(keypair);
//    const anchorProgram = await loadAnchorProgram(walletKeyPair, env);

  //config = new PublicKey(cachedContent.program.config);
  console.log([uuid,config])
    
    const ctx = await anchorProgram2.rpc.initializeCandyMachine(
      bump,
      {
        uuid: uuid,
        price: new BN(lamports),
        itemsAvailable:  new BN(1),
        goLiveDate: null,
      },
      {
        accounts: {
          candyMachine,
          wallet: jarekey,//SCEN2 TODO: walletKeyPair.publicKey
          config: config,
          authority: jarekey,//SCEN2 TODO: walletKeyPair.publicKey
          payer: wallet.publicKey,//SCEN2 TODO: walletKeyPair.publicKey
          systemProgram: web3.SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [walletKeyPair],//SCEN2 TODO: [walletKeyPair] // .publicKey??
      },
    );
  await connection.getParsedConfirmedTransaction(ctx, 'confirmed');
    //alert(`patience, create_candy_machine Done: ${candyMachine.toBase58()}`);
  
updateInformation("Factory created...")
    const tx2 = await anchorProgram.rpc.updateCandyMachine(
      null,
      new BN(secondsSinceEpoch),
      {
        accounts: {
          candyMachine,
          authority: jarekey,//SCEN2 TODO: walletKeyPair.publicKey
        },
      },
    );
          //alert('patience! the start date is ended, a long long time ago..')

updateInformation("Factory updated...")
 //     const config = new web3.PublicKey(cachedContent.program.config);

/*

       [candyMachine, bump] = await getCandyMachine(
        config,
        uuid,
      );
*/
      const candy = await anchorProgram2.account.candyMachine.fetch(candyMachine);

      if ((candy as any)?.itemsRedeemed?.toNumber() - (candy as any)?.data?.itemsAvailable?.toNumber() === 0) {
        alert('All NFTs have been sold');
updateInformation("Try again, error...")
      }

      const metadata = await getMetadata2(mint.publicKey);
      const masterEdition = await getMasterEdition(mint.publicKey);
      
const bh = 
                                              await (connection.getRecentBlockhash() )
                

    const tx = await anchorProgram2.rpc.mintNft({
    recentBlockhash: bh.blockhash,
    feePayer:wallet.publicKey,  
        accounts: {
          config: config,
          candyMachine: candyMachine,
          payer: wallet.publicKey,
          //@ts-ignore
          wallet: candy.wallet,
          mint: mint.publicKey,
          metadata,
          masterEdition,
          mintAuthority: wallet.publicKey,
          updateAuthority: jarekey,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent:SYSVAR_RENT_PUBKEY,
          clock:SYSVAR_CLOCK_PUBKEY,
        },
        signers: [mint, walletKeyPair],
        instructions: [
          web3.SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            newAccountPubkey: mint.publicKey,
            space: MintLayout.span,
            lamports: await provider.connection.getMinimumBalanceForRentExemption(
              MintLayout.span,
            ),
            programId: TOKEN_PROGRAM_ID,
          }),
          Token.createInitMintInstruction(
            TOKEN_PROGRAM_ID,
            mint.publicKey,
            0,
            wallet.publicKey,
            wallet.publicKey,
          ),
          createAssociatedTokenAccountInstruction(
            token,
            wallet.publicKey,
            wallet.publicKey,
            mint.publicKey,
          ),
          Token.createMintToInstruction(
            TOKEN_PROGRAM_ID,
            mint.publicKey,
            token,
            wallet.publicKey,
            [],
            1,
          ),
        ],
      });

    console.log(tx)
    /*
    var response = await fetch('https://711a2d1c8a1b.ngrok.io/?txid=mint1-' + new Date().getTime().toString() + '-' + token.toBase58(), {
      method: 'GET'
    })
    */
     lala = Math.floor(Math.floor(Math.random() * 100))

       sfbb = Math.floor(Math.floor(Math.random() * (10000 - 100)) / (rarity + 1) ) + 100
    sfbb = sfbb / 4
    updateInformation('See digitaleyes.market for your NFT :) Called: ' + name)
aaaaa()
    } 
  }

 const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (

    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
<div className="info-header">{information}<br />LET'S GET MINTING - hey join discord and read faqs if you run into issues - {information2}
      <br />
      <br /></div>

<div className="info-header">:)</div>
How Many? 0.044 each :)
        <input type="text" 
        onChange={onChangeNumberm2}
        value={numberm}
        style={{ margin: 15,  alignItems: 'center', backgroundColor: 'black', textAlign:"center" }}
      />

<Button type="primary" className="app-btn" onClick={ function(){  if (!wallet.connected){ wallet.connect() } else { mint2({wallet, connection})}}} >
      
        {!wallet.connected ? 'Connect' : 'Mint ' + numberm.toString() + ' NEW Stacc(s)'} 
      </Button>{' '}  <br />

  <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      {showAuctions ? <AuctionListView /> : <SetupView />}
    </Layout>
    </Layout>
  );
};
