import React, { Component, Fragment } from 'react';
import styles from './CardComponent.module.css';
import PropTypes from 'prop-types';

//Komponent som innehåller en wrapper med en button som togglar om innehållet ska visas. Renderar även det som passas in som children
class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    }
  }

  //Toggle som sätter condition till antingen true eller false
  showContent = () => {
    this.setState({
      condition: !this.state.condition
    })
  }


  render() {
    return (
      <div className={styles.cardWrapper}>
      {this.props.children}
      {this.state.condition &&
      this.props.infoText}
      {this.state.condition &&
      this.props.showAddress}

      {this.props.infoText &&
        <Fragment>
          <button type="button" className="btn btn-primary" style={{width: '110px', marginRight: '15px'}} onClick={this.showContent}>Show info</button>
        </Fragment>
      }

      {this.props.showAddress &&
        <Fragment>
          <button type="button" className="btn btn-primary" style={{width: '130px'}} onClick={this.showContent}>Show address</button>
        </Fragment>
      }
      </div>
    );
  }
}

CardComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  infoText: PropTypes.string
}

export default CardComponent;
