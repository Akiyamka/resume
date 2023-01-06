# Akiyamka's portfolio page
This page contain some info about me and my skills.
Also this project - experiment with technologies that I have been putting aside for a long time.

## Tech stack
 - [Preact](https://preactjs.com/) - Fast 3kB alternative to React with the same modern API  
 - [viteJS](https://vitejs.dev/) - modern alternative of webpack.  
 - In order to get the application load quickly, and work from static hosting I use pre-rendering (SSG)

## Preparing
Use should use [pnpm](https://pnpm.io/) to install dependencies

```bash
$ pnpm install
```

## Development

For run the app in the development mode:

```bash
$ pnpm dev # or pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>

## Build

For build the app use should use:

```bash
$ pnpm build 
```
Builds the app for production to the `dist` folder.<br>
It correctly bundles application in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Agreements
Page files should contain `.page.tsx` in name, and export page component with name `Page`



## Roadmap:
- [x] add SSG
- [x] contacts section
- [x] skills section
- [x] languages section
- [x] external link styles (add arrow on top right corner for external links)
- [x] experience section
- [x] education section
- [x] fix layout bug (grid was bad idea?)
- [x] add footer
- [x] auto last update date
- [ ] tooltips for years (from-to)
- [x] open external link in new tab
- [ ] certificates section
- [ ] download as [jsonresume](https://jsonresume.org/schema/)]
- [ ] download as pdf
- [ ] add highlight for rare skills (GIT, DE)
- [x] add mobile layout
- [ ] auto collect translation strings into one json with namespaces
- [ ] icons for social links
- [ ] detailed description for jobs?
- [ ] add grouping for skills section?
- [x] dark grb version?