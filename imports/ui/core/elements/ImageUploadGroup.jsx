import React, { Component, PropTypes } from 'react';
import { Slingshot } from 'meteor/edgee:slingshot';

class ImageUploadGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    uploadFile(event) {
        this.setState({loading: true});
        let file = event.target.files[0];
        var uploader = new Slingshot.Upload("imageUpload");

        uploader.send(file, (error, downloadUrl) => {
            if (error) {
                // Log service detailed response.
                console.error('Error uploading', uploader.xhr.response);
                alert (error);
            }
            else {
                console.log(downloadUrl);
                this.props.onChange(downloadUrl);
            }

            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <input
                    type="file"
                    ref="image"
                    onChange={this.uploadFile.bind(this)}/>
                {this.state.loading ? <p>uploading...</p>:''}
            </div>
        )
    }
}

ImageUploadGroup.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ImageUploadGroup;