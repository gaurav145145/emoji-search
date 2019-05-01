import React ,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

class SearchInput extends PureComponent{

    handleChange =event =>{
        console.log("djjds");
        this.props.textChange(event)
    };
    render(){

        console.log("jjds");
        return(
            <div className="component-search-input" >
            <div>
            <input onChange={this.handleChange}/>
            </div>
            </div>
    );
    }
}
SearchInput.propTypes={
    textChange : PropTypes.func

};
export default SearchInput;