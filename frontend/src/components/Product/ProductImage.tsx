import ReactImageMagnify from 'react-image-magnify';

function ImageZoom() {

    return (
      <div>
        <div className=''>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Produto",
                isFluidWidth: true,
                src: '/mambore.png',
                width: 300,
                height: 300,
              },
              largeImage: {
                src: '/mambore.png',
                width: 1500,
                height: 1500,
              },
              isHintEnabled: true,
            }}
          />
        </div>
      </div>
    );
}

export default ImageZoom