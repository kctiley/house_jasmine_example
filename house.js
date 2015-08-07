function House(numberOfDoors, numberOfWindows) {
    this.numberOfDoors = numberOfDoors;
    this.numberOfWindows = numberOfWindows;
    this.toString = function() {
      var pluralDoors = (this.numberOfDoors > 1) || (this.numberOfDoors) === 0 ? 's': '';
      var pluralWindows = (this.numberOfWindows > 1) || (this.numberOfWindows) === 0 ? 's': '';
      return 'The house has ' + this.numberOfDoors + ' door' + pluralDoors +' and ' + this.numberOfWindows + ' window' + pluralWindows;
    }


  }

  module.exports = House;