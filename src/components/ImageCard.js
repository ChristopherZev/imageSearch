import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {spans: 0};
        this.picRef = React.createRef();
    }

    componentDidMount(){
        this.picRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () =>{
        const height = this.picRef.current.clientHeight;
        const spans = Math.ceil(height/10) + 1;

        this.setState({
            spans
        });


    }

    render(){

        const {description, urls} = this.props.pic;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}} >
                <img 
                    src={urls.regular}
                    alt={description}
                    ref={this.picRef}
                />
            </div>
        );
    }
}

export default ImageCard;