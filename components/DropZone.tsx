import ReactDropZone from 'react-dropzone';

const DropZone = () => {

    const acceptedFiles = {}

    const handleUpload = () => { }

    const handleHover = () => { }

    const handleDragLeave = () => { }

    const handleDropRejection = () => { }

    const handleError = () => { }

    return (
        <ReactDropZone
            onDrop={handleUpload}
            onDragEnter={handleHover}
            onDragLeave={handleDragLeave}
            accept={acceptedFiles}
            onDropRejected={handleDropRejection}
            onError={handleError}
        >
        </ReactDropZone>
    )
}

export default DropZone;