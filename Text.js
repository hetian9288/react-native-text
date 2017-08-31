import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
		Text,
} from 'react-native'

class mText extends PureComponent{

		state = {}

		componentWillMount() {
				this.setText(this.props.children)
		}

		setText = (text: String) => {
				this.setState({
						label: text
				})
		}

		componentWillReceiveProps(nextProps) {
				if(this.state.label !== nextProps.children) {
						this.setText(nextProps.children)
				}
		}

		render(){
				return <Text {...this.props}>{this.state.label}</Text>
		}
}

mText.propTypes = {
		...Text.propTypes,
		children: PropTypes.string.isRequired
}

export default mText;
