<h1 align = "center">
  <a href="https://mint-nft-fawn.vercel.app/"> NFT Mint Website </a> ⛓
</h1>

![image](https://github.com/Harshkumar62367/mint-nft/assets/72465090/fc94276a-8291-4cb6-bc7c-d47c7cd8d0d4)




# Build with Thirdweb components and Makeswift

In this site, we've integrated thirdweb components from our Next.js app into [Makeswift](https://www.makeswift.com) to make it visually editable.

## Tools used

- [**React SDK**](https://docs.thirdweb.com/react): to enable users to connect their wallets with the [useMetamask](https://portal.thirdweb.com/react/react.usemetamask) hook, and access hooks such as [useNFTDrop](https://portal.thirdweb.com/react/react.usenftdrop) to interact with the NFT drop contract.
- [**TypeScript SDK**](https://docs.thirdweb.com/typescript): to view the claimed supply, total supply, and mint NFTs from the drop.
- [**Makeswift SDK**](https://www.makeswift.com/docs): to register components into Makeswift's visual builder.

---

### You can also deploy your own NFT mint website to Vercel by clicking below button

Deploy your own NFT mint site with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmakeswift%2Fmakeswift%2Ftree%2Fmain%2Fexamples%2Fthirdweb&project-name=makeswift-thirdweb-example&repo-name=makeswift-thirdweb-example&redirect-url=https%3A%2F%2Fapp.makeswift.com&integration-ids=oac_51ryd7Pob5ZsyTFzNzVvpsGq&external-id=ecommerce-thirdweb)



### Use this example locally with the Makeswift CLI

1. Run the Makeswift CLI command

   ```bash
   npx makeswift@latest init --template=ecommerce-thirdweb
   ```

   Note: the `--template=ecommerce-thirdweb` above will auto-select the "Ecommerce - Thirdweb" template in Makeswift and download this example Next.js app to your local machine

2. Log in or sign up for Makeswift

Once completed, the CLI runs `yarn dev` and redirects you to app.makeswift.com.

### Take a tour of your web3 website

After integration, you will be redirected to app.makeswift.com. You can see the "NFT Drop" component on the right-hand side of the screen.

With the NFT drop component selected, paste your NFT drop contract address from Thirdweb into the "Contract address" panel and select the correct chain.

> If you don't have an NFT drop contract, you can [read this guide](https://portal.thirdweb.com/guides/release-an-nft-drop-with-no-code#create-a-drop-contract) to learn how to create one using Thirdweb without any code.


---

### Links


- [Makeswift Website](https://www.makeswift.com/)
- [Makeswift Documentation](https://www.makeswift.com/docs/)
- [Makeswift Discord Community](https://discord.gg/dGNdF3Uzfz)

You can check out [the Makeswift GitHub repository](https://github.com/makeswift/makeswift) - your feedback and contributions are welcome!
