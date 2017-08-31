import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash/lang'
import {
		Text,
} from 'react-native'

class mText extends PureComponent{

		state = {}

		componentWillMount() {
				this.setText(this.props.children)
		}

		setText = (text: any) => {
				this.setState({
						label: text
				})
		}

		setNativeProps(param: object) {
				this.textRef.setNativeProps(param);
		}

		componentWillReceiveProps(nextProps) {
				if(!_.isEqual(this.state.label, nextProps.children)){
						this.setText(nextProps.children)
				}
		}

		render(){
				return <Text ref={r => this.textRef = r} {...this.props}>{this.state.label}</Text>
		}
}

mText.propTypes = {
		...Text.propTypes
}

export default mText;
