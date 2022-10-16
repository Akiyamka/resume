# Akiyamka's portfolio page
This page contain some info about me and my skills.
Also this project - experiment with technologies that I have been putting aside for a long time.

## Tech stack
 - [solidJS](https://www.solidjs.com/) - react substitute in terms of performance and not only.  
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
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Agreements
Page files should contain `.page.tsx` in name, and export page component with name `Page`



## Roadmap:
- [x] add SSG
- [x] contacts section
- [x] skills section
- [x] languages section
- [ ] external link styles
- [ ] experience section
- [ ] education section
- [ ] certificates section
- [ ] download as [jsonresume](https://jsonresume.org/schema/)
- [ ] add grouping fow skills section
- [ ] add mobile layout
- [ ] feedback form
- [ ] darg grb version
- [ ] collect translation strings into one json with namespaces
- [ ] detailed description for jobs