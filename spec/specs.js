describe('encrypt', function() {

  // it("removes all spaces and special characters from a string", function() {
  //   expect(encrypt("test this code's message")).to.equal("testthiscodesmessage")
  // })

  // it("returns the number of characters in the new string", function() {
  //   expect(encrypt("test this code's message")).to.equal(20)
  // })

  // it("returns number of columns for the closest perfect square that fits the string characters", function () {
  //   expect(encrypt("test this code's message")).to.equal(5)
  // })

  // it("returns the number of rows", function () {
  //   expect(encrypt("test this code's message")).to.equal(4)
  // })

  // it("returns the string in rectangular or square form", function () {
  //   expect(encrypt("test this code's messages")).to.equal("`testt hisco desme ssage s")`
  // })

  it("returns the string in square code form", function () {
    expect(encrypt("test this code's messages")).to.equal("thdss eiess ssatc mgtoe e")
  })

})
