`packages/netlify-cms-core/src/components/MediaLibrary/MediaLibrary.js` component is mounted when page loads.

    componentDidMount() {
      this.props.loadMedia(); // Fetches the each object and adds it to the files property of props. 
    }

`loadMedia()` function comes from `packages/netlify-cms-core/src/actions/mediaLibrary.ts`. This function returns another function called `loadFunction()`. It calls the `getMedia()` function from the current backend implementation.

    backend
        .getMedia()
        
This calls the `getMedia()` function in `packages/netlify-cms-core/src/backend.ts`, which in turn calls the `getMedia()` function in the current backend implementation.

With the github backend, this function is in `packages/netlify-cms-backend-github/src/implementation.tsx`. It calls 

    this.api!.listFiles(mediaFolder)

It is the above function where the depth argument can be specified.

The `listFiles()` function is in `packages/netlify-cms-backend-github/src/API.ts`.

This function filters out non blobs- ie it only allows files through, and not `tree` objects (Directories)

But how is this data finally passed to the template?