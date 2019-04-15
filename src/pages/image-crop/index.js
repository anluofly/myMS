import React from 'react';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';

export default class FormLogin extends React.Component {
    state = {
        src: '/test.jpg',
        crop: {
            aspect: 1,
            x: 20,
            y: 10,
            width: 30,
            height: 10
        }
    }
    onImageLoaded = (image, pixelCrop) => {
        this.imageRef = image;
    }
    onCropComplete = (crop, pixelCrop) => {
        console.log('onCropComplete', { crop, pixelCrop });
        this.setState({
            crop
        });
    }
    onCropChange = (crop) => {
        console.log('onChange', crop);
        this.setState({ crop });
    }
    onDragStart = () => {
        console.log('onDragStart');
    }

    onDragEnd = () => {
        console.log('onDragEnd');
    }
    renderSelectionAddon = () => (
        <button
          type="button"
          style={{
            position: 'absolute',
            bottom: -25,
            right: 0,
          }}
          onClick={() => window.alert('You click addon!')}
        >
          custom addon
        </button>
      )
    
    render() {
        return(
            <div>
                <ReactCrop src={this.state.src} 
                    crop={this.state.crop} 
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                    renderSelectionAddon={this.renderSelectionAddon}
                />
            </div>
        )
    }
}