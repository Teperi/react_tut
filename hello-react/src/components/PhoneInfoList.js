import React, { Component } from 'react';
import Phonelnfo from './Phonelnfo';

export default class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not definde')
  };

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <Phonelnfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />
    ));
    return <div>{list}</div>;
  }
}
