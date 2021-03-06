import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Rating extends Component {

    state = {
        grade: 0
    }
    
    renderStar(){
        return(
            <View style={styles.starContainer}>
                <Icon name="star" color="#FBC02D" size={40} />
            </View>
        )
    }

    renderStarBorder(){
        return(
            <View style={styles.starContainer}>
                <Icon name="star-border" color="#212121" size={40} />
            </View>
        )
    }

    handleGrade = () => {
        this.props.action(this.state.grade)
    }

    componentDidMount() {
        try {
            if(this.props.grade) this.setState({ grade: this.props.grade })
        } catch(e) { console.log(e) }
    }
    
    render(){
        
        const { container, starContainer } = styles
        const { grade } = this.state

        return(
            <View style={container} >
                <TouchableOpacity onPress={() => { this.setState({ grade: 1 }, this.handleGrade) }} >
                    { (grade >= 1) ?
                        this.renderStar() :
                        this.renderStarBorder() }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setState({ grade: 2 }, this.handleGrade) }} >
                    { (grade >= 2) ?
                        this.renderStar() :
                        this.renderStarBorder() }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setState({ grade: 3 }, this.handleGrade) }} >
                    { (grade >= 3) ?
                        this.renderStar() :
                        this.renderStarBorder() }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setState({ grade: 4 }, this.handleGrade) }} >
                    { (grade >= 4) ?
                        this.renderStar() :
                        this.renderStarBorder() }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setState({ grade: 5 }, this.handleGrade) }} >
                    { (grade >= 5) ?
                        this.renderStar() :
                        this.renderStarBorder() }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        paddingTop: 8,
        alignItems: 'center',
    },
    starContainer: {
        marginHorizontal: 8,
    }
})