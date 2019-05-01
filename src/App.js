import React , {PureComponent} from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import filterEmoji from './FilterEmoji';
import EmojiResults from './EmojiResults';
class App extends PureComponent{
constructor() {
  super()
  this.state ={
    filteredEmoji: filterEmoji("",20)
  };
}
handleSearchChange = event =>{
  this.setState({
    filteredEmoji:filterEmoji(event.target.value,20)
  });
};
   render() {
    return(
     <div>
     <Header />
     <SearchInput textChange={this.handleSearchChange} />
     <EmojiResults emojiData={this.state.filteredEmoji}/>
     </div>
    );
  }
}
export default App;

