const rps = (p1, p2) => {
  let x = 'scissors'
  let y = 'paper'
  let z = 'rock'
  if (p1==x&&p2==y||p1==y&&p2==z||p1==z&&p2==x) {
    return "Player 1 won!"
  }
  if (p2==x&&p1==y||p2==y&&p1==z||p2==z&&p1==x) {
    return "Player 2 won!"
  }
  if (p1==x&&p2==x||p1==y&&p2==y||p1==z&&p2==z) {
    return "Draw!"
  }
};