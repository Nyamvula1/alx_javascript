function createClassRoom(numbersOfStudents){
    //Inside createClassRoom, there's a nested function studentSeat which 
    //takes the seat number 
    //as an argument and returns a closure 
    //that returns the seat number when called.
    function studentSeat(seat){
        return function(){
            return seat;
        }
        //initialize an empty students array.  
        var students = [];
        //A loop from 0 to numbersOfStudents is used to
        // populate the students array by calling studentSeat
        // with the seat number and pushing the returned closure to the array.
            for (var i = 0; i < numbersOfStudents; i++)
                var seatNumber = i + 1;
                students.push(studentSeat(seatNumber));
    }
    return students;
}
var classRoom = createClassRoom(10);