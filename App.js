import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from 'react-native-web';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calorieNeeds, setCalorieNeeds] = useState(0);
  
  // Activity level multipliers
  const activityLevels = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extremelyActive: 1.9
  };

  // Mifflin-St Jeor Equation for calculating calorie needs
  // For men: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) + 5
  // For women: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) - 161
  const calculateCalories = () => {
    if (!weight || !height || !age || !sex || !activityLevel) {
      // Show an error message if any of the input is empty
      alert('Please fill in all fields');
      return;
    }

    let BMR = 0;
    if (sex === 'male') {
      BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (sex === 'female') {
      BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    BMR *= activityLevels[activityLevel];
    setCalorieNeeds(BMR);
  };

  return (
    <View style={styles.container}>
      <Text>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={text => setWeight(parseInt(text))}
      />

      <Text>Height (cm):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={text => setHeight(parseInt(text))}
      />

      <Text>Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={text => setAge(parseInt(text))}
      />

      <Text>Sex:</Text>
      <Picker
          selectedValue={sex}
          onValueChange={(itemValue) => setSex(itemValue)}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
      </Picker>

      <Text>Activity Level:</Text>
      <Picker
          selectedValue={activityLevel}
          onValueChange={(itemValue) => setActivityLevel(itemValue)}>
          <Picker.Item label="Sedentary" value="sedentary" />
          <Picker.Item label="Lightly Active" value="lightlyActive" />
          <Picker.Item label="Moderately Active" value="moderatelyActive" />
          <Picker.Item label="Very Active" value="veryActive" />
          <Picker.Item label="Extremely Active" value="extremelyActive" />
      </Picker>


      <Button title="Calculate" onPress={calculateCalories} />
      <Text>Calorie Needs: {calorieNeeds}</Text>
    </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  }
});

export default CalorieCalculator;
function newFunction(setActivityLevel) {
  console.log(setActivityLevel);
}

