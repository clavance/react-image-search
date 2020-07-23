import React from "react";

// component should be used to render ONE image on its own
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 0 };
    // create a ref
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    // EventListener is needed to wait for the image to load
    // if not, this.imgRef.current.clientHeight returns 0
    // (component has rendered, but image hasn't been returned!)
    console.log(this.imgRef.current.addEventListener("load", this.setRows));
  }

  setRows = () => {
    const height = this.imgRef.current.clientHeight;
    const rows = Math.ceil(height / 10);
    this.setState({ rows });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.rows}` }}>
        <img ref={this.imgRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
