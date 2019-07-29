import React, { Component } from 'react';
import Stories from 'react-insta-stories'
import './Story.css'

const myStyles = {
    height: '800px',
    width: '451px',
}
const stories = [];



//const stories = [{ url: 'https://picsum.photos/1080/1920', header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80']


class StoryTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            name: '',
            order: 0
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        if (this.state.showComponent) {
            this.setState({
                showComponent: false,
                name: 'show-story'
            });
        } else {
            this.setState({
                showComponent: true,
                name: 'hide-story'
            });
        }
    }


    render() {
        const story = this.props;
        stories = []
        for (let i = 0; i < story.subStory.length; i++) {
            var obj = {};
            obj["url"] = story.subStory[i].url;
            var obj2 = {};
            obj2["heading"] = story.subStory[i].title;
            obj["header"] = obj2;
            stories.push(obj);
        }
        return (
            <div className="subStory-div">
                <input className={this.state.name} type="image" src={story.subStory[0].url} onClick={this._onButtonClick} id="test_story"></input>
                <h4>{story.title}</h4>

                {((this.state.showComponent) && (stories.length > 0)) ?
                    <div className="child">
                        <button onClick={this._onButtonClick} className="close_button">X</button>
                        <Stories
                            stories={stories}
                            defaultInterval={1500}
                            width={470}
                            height={768}
                            storyStyles={myStyles}
                            func={this._onButtonClick}
                        />

                    </div>
                    :
                    null
                }

            </div>
        );
    }
}

export default StoryTemplate;