import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount(){
        this.setState(this.props.post)
    }
    render(){
        const{postName, postImageUrl, description} = this.state;
        if(this.state.length<=0){
            return(<div>Loading...</div>)
        }else {
            return(
                <section className="container">
                    <div className="article">
                        <h1 className="article_heading">
                            {postName}
                        </h1>

                        <div className="article_img">
                            <img src={postImageUrl} alt={postName}/>
                        </div>
                        <div className="article_text">
                            <div className="left_animate">
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
};
function mapStateToProps(state){
    return{
        post: state.posts[0]
    }
}
export default connect(mapStateToProps, null)(PostPage)

