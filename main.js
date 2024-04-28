
// Song

btnA = document.querySelector(".btn-a")
btnS = document.querySelector(".btn-s")
btnD = document.querySelector(".btn-d")
btnF = document.querySelector(".btn-f")
btns = Array.from(document.querySelectorAll(".btn"))

end = true

let MaxCombo = 0

let speed = 30

let scale = 0

let Bonus = 100
let BonusScore = 0
let BaseScore = 0
const MaxScore = 1000000

let TotalNotes = 0

let perfect = 0
let good = 0
let bad = 0
let miss = 0


document.addEventListener("keydown", keyPress)
btns.forEach(e => {
  e.addEventListener("touchstart", TouchPress)
});

function keyPress(e) {
  if (!end) {
    switch (e.code) {
      case "KeyA":
        if (sound) {
          const audioA = new Audio('pianoA.mp3')
          audioA.play()
        }
        i1 = 1
        WhiteA();
        function WhiteA(params) {
          i1 -= 0.01
          setTimeout(() => {
            btnA.style.background = `rgba(256,256,256,${i1})`;
            if (i1 > 0) {
              WhiteA();
            }
          }, 1);
        }
        const tilesA = Array.from(document.querySelectorAll('[data-line = "A"]'))
        tilesA.forEach(e => {
          if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Perfect"
            perfect += 1
            HitValue = 320
            HitBonusValue = 32
            HitBonus = 2
            HitPunishment = 0

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
            e.outerHTML = ""
            document.querySelector(".text-acc").innerHTML = "Good"
            good += 1
            HitValue = 200
            HitBonusValue = 16
            HitBonus = 0
            HitPunishment = 8

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            if (good != 0 && bad == 0 && miss == 0) {
              document.querySelector(".text-combo").style.color = "yellow"
            }
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale(params) {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Bad"
            bad += 1
            HitValue = 50
            HitBonusValue = 4
            HitBonus = 0
            HitPunishment = 44

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }
            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo").style.color = "#c1c1c1"
            document.querySelector(".text-combo span").innerHTML = 0
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          }
        })
        break;
      case "KeyS":
        if (sound) {
          const audioS = new Audio('pianoS.mp3')
          audioS.play();
        }
        i2 = 1
        WhiteB();
        function WhiteB(params) {
          i2 -= 0.01
          setTimeout(() => {
            btnS.style.background = `rgba(256,256,256,${i2})`;
            if (i2 > 0) {
              WhiteB();
            }
          }, 1);
        }
        const tilesS = Array.from(document.querySelectorAll('[data-line = "S"]'))
        tilesS.forEach(e => {
          if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Perfect"
            perfect += 1
            HitValue = 320
            HitBonusValue = 32
            HitBonus = 2
            HitPunishment = 0

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Good"
            good += 1
            HitValue = 200
            HitBonusValue = 16
            HitBonus = 0
            HitPunishment = 8

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            if (good != 0 && bad == 0 && miss == 0) {
              document.querySelector(".text-combo").style.color = "yellow"
            }
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Bad"
            bad += 1
            HitValue = 50
            HitBonusValue = 4
            HitBonus = 0
            HitPunishment = 44

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo").style.color = "#c1c1c1"
            document.querySelector(".text-combo span").innerHTML = 0
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          }
        })
        break;
      case "KeyD":
        if (sound) {
          const audioD = new Audio('pianoD.mp3')
          audioD.play();
        }
        i3 = 1
        WhiteD();
        function WhiteD(params) {
          i3 -= 0.01
          setTimeout(() => {
            btnD.style.background = `rgba(256,256,256,${i3})`;
            if (i3 > 0) {
              WhiteD();
            }
          }, 1);
        }
        const tilesD = Array.from(document.querySelectorAll('[data-line = "D"]'))
        tilesD.forEach(e => {
          if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Perfect"
            perfect += 1
            HitValue = 320
            HitBonusValue = 32
            HitBonus = 2
            HitPunishment = 0

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Good"
            good += 1
            HitValue = 200
            HitBonusValue = 16
            HitBonus = 0
            HitPunishment = 8

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            if (good != 0 && bad == 0 && miss == 0) {
              document.querySelector(".text-combo").style.color = "yellow"
            }
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Bad"
            bad += 1
            HitValue = 50
            HitBonusValue = 4
            HitBonus = 0
            HitPunishment = 44

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo").style.color = "#c1c1c1"
            document.querySelector(".text-combo span").innerHTML = 0
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          }
        })
        break;
      case "KeyF":
        if (sound) {
          const audioF = new Audio('pianoF.mp3')
          audioF.play();
        }
        i4 = 1
        WhiteF();
        function WhiteF(params) {
          i4 -= 0.01
          setTimeout(() => {
            btnF.style.background = `rgba(256,256,256,${i4})`;
            if (i4 > 0) {
              WhiteF();
            }
          }, 1);
        }
        const tilesF = Array.from(document.querySelectorAll('[data-line = "F"]'))
        tilesF.forEach(e => {
          if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Perfect"
            perfect += 1
            HitValue = 320
            HitBonusValue = 32
            HitBonus = 2
            HitPunishment = 0

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Good"
            good += 1
            HitValue = 200
            HitBonusValue = 16
            HitBonus = 0
            HitPunishment = 8

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            if (good != 0 && bad == 0 && miss == 0) {
              document.querySelector(".text-combo").style.color = "yellow"
            }
            document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
            if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
              MaxCombo = +document.querySelector(".text-combo span").innerHTML
            }
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
            e.outerHTML = "";
            document.querySelector(".text-acc").innerHTML = "Bad"
            bad += 1
            HitValue = 50
            HitBonusValue = 4
            HitBonus = 0
            HitPunishment = 44

            Bonus = Bonus + HitBonus - HitPunishment

            if (Bonus > 100) {
              Bonus = 100
            } else if (Bonus < 0) {
              Bonus = 0
            }

            BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
            BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
            document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
            document.querySelector(".text-combo").style.color = "#c1c1c1"
            document.querySelector(".text-combo span").innerHTML = 0
            scale = 1.2
            Scale();
            function Scale() {
              scale -= 0.01 ** scale
              setTimeout(() => {
                if (scale >= 0.224715) {
                  document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                  Scale()
                }
              }, 1);
            }
          }
        })
        break;
      default:
        break;
    }
  }
}
function TouchPress(e) {
  switch (this.getAttribute("data-btn")) {
    case "A":
      if (sound) {
        const audioA = new Audio('pianoA.mp3')
        audioA.play()
      }
      i1 = 1
      WhiteA();
      function WhiteA(params) {
        i1 -= 0.01
        setTimeout(() => {
          btnA.style.background = `rgba(256,256,256,${i1})`;
          if (i1 > 0) {
            WhiteA();
          }
        }, 1);
      }
      const tilesA = Array.from(document.querySelectorAll('[data-line = "A"]'))
      tilesA.forEach(e => {
        if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Perfect"
          perfect += 1
          HitValue = 320
          HitBonusValue = 32
          HitBonus = 2
          HitPunishment = 0

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Good"
          good += 1
          HitValue = 200
          HitBonusValue = 16
          HitBonus = 0
          HitPunishment = 8

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          if (good != 0 && bad == 0 && miss == 0) {
            document.querySelector(".text-combo").style.color = "yellow"
          }
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Bad"
          bad += 1
          HitValue = 50
          HitBonusValue = 4
          HitBonus = 0
          HitPunishment = 44

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo").style.color = "#c1c1c1"
          document.querySelector(".text-combo span").innerHTML = 0
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        }
      })
      break;
    case "S":
      if (sound) {
        const audioS = new Audio('pianoS.mp3')
        audioS.play();
      }
      i2 = 1
      WhiteB();
      function WhiteB(params) {
        i2 -= 0.01
        setTimeout(() => {
          btnS.style.background = `rgba(256,256,256,${i2})`;
          if (i2 > 0) {
            WhiteB();
          }
        }, 1);
      }
      const tilesS = Array.from(document.querySelectorAll('[data-line = "S"]'))
      tilesS.forEach(e => {
        if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Perfect"
          perfect += 1
          HitValue = 320
          HitBonusValue = 32
          HitBonus = 2
          HitPunishment = 0

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Good"
          good += 1
          HitValue = 200
          HitBonusValue = 16
          HitBonus = 0
          HitPunishment = 8

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          if (good != 0 && bad == 0 && miss == 0) {
            document.querySelector(".text-combo").style.color = "yellow"
          }
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Bad"
          bad += 1
          HitValue = 50
          HitBonusValue = 4
          HitBonus = 0
          HitPunishment = 44

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo").style.color = "#c1c1c1"
          document.querySelector(".text-combo span").innerHTML = 0
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        }
      })
      break;
    case "D":
      if (sound) {
        const audioD = new Audio('pianoD.mp3')
        audioD.play();
      }
      i3 = 1
      WhiteD();
      function WhiteD(params) {
        i3 -= 0.01
        setTimeout(() => {
          btnD.style.background = `rgba(256,256,256,${i3})`;
          if (i3 > 0) {
            WhiteD();
          }
        }, 1);
      }
      const tilesD = Array.from(document.querySelectorAll('[data-line = "D"]'))
      tilesD.forEach(e => {
        if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Perfect"
          perfect += 1
          HitValue = 320
          HitBonusValue = 32
          HitBonus = 2
          HitPunishment = 0

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Good"
          good += 1
          HitValue = 200
          HitBonusValue = 16
          HitBonus = 0
          HitPunishment = 8

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          if (good != 0 && bad == 0 && miss == 0) {
            document.querySelector(".text-combo").style.color = "yellow"
          }
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Bad"
          bad += 1
          HitValue = 50
          HitBonusValue = 4
          HitBonus = 0
          HitPunishment = 44

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo").style.color = "#c1c1c1"
          document.querySelector(".text-combo span").innerHTML = 0
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        }
      })
      break;
    case "F":
      if (sound) {
        const audioF = new Audio('pianoF.mp3')
        audioF.play();
      }
      i4 = 1
      WhiteF();
      function WhiteF(params) {
        i4 -= 0.01
        setTimeout(() => {
          btnF.style.background = `rgba(256,256,256,${i4})`;
          if (i4 > 0) {
            WhiteF();
          }
        }, 1);
      }
      const tilesF = Array.from(document.querySelectorAll('[data-line = "F"]'))
      tilesF.forEach(e => {
        if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 30) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Perfect"
          perfect += 1
          HitValue = 320
          HitBonusValue = 32
          HitBonus = 2
          HitPunishment = 0

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= 80) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Good"
          good += 1
          HitValue = 200
          HitBonusValue = 16
          HitBonus = 0
          HitPunishment = 8

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          if (good != 0 && bad == 0 && miss == 0) {
            document.querySelector(".text-combo").style.color = "yellow"
          }
          document.querySelector(".text-combo span").innerHTML = +document.querySelector(".text-combo span").innerHTML + 1
          if (MaxCombo < +document.querySelector(".text-combo span").innerHTML) {
            MaxCombo = +document.querySelector(".text-combo span").innerHTML
          }
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        } else if (Math.abs(window.innerHeight - +e.style.transform.split('+')[1].split("px")[0]) <= +e.clientHeight) {
          e.outerHTML = "";
          document.querySelector(".text-acc").innerHTML = "Bad"
          bad += 1
          HitValue = 50
          HitBonusValue = 4
          HitBonus = 0
          HitPunishment = 44

          Bonus = Bonus + HitBonus - HitPunishment

          if (Bonus > 100) {
            Bonus = 100
          } else if (Bonus < 0) {
            Bonus = 0
          }

          BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
          BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
          document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
          document.querySelector(".text-combo").style.color = "#c1c1c1"
          document.querySelector(".text-combo span").innerHTML = 0
          scale = 1.2
          Scale();
          function Scale() {
            scale -= 0.01 ** scale
            setTimeout(() => {
              if (scale >= 0.224715) {
                document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
                Scale()
              }
            }, 1);
          }
        }
      })
      break;
    default:
      break;
  }
}


class createTileS {
  constructor(length, time, spawner) {
    this.length = length
    this.time = time
    this.spawner = document.querySelector(`.spawner${spawner}`)
  }
}

const tile = document.createElement("div")

function CreateTile(length, time, spawner) {
  setTimeout(() => {
    if (!end) {
      tilef = new createTileS(length, time, spawner);
      tilef.spawner.prepend(tile);
      tile.outerHTML = `<div class='tile' data-line="${spawner}" style="height: ${length * 100}%; transform: translateY(calc(-100% + 0px))"></div>`;
    }
  }, (time * 1000) - (window.innerHeight / (50 * speed) * 1000));

}

setInterval(() => {
  if (!end) {
    Array.from(document.querySelectorAll(".tile")).forEach(e => {
      let transform = +e.style.transform.split('+')[1].split("px")[0] + speed
      e.style.transform = "translateY(calc(-100% + " + transform + 'px))';
    })
    if (scale <= 0.224715) {
      document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(0)`;
    }
  }
}, 20);


setInterval(() => {
  Array.from(document.querySelectorAll(".tile")).forEach(e => {
    if (+e.style.transform.split('+')[1].split("px")[0] - +e.clientHeight >= window.innerHeight) {
      e.outerHTML = "";
      document.querySelector(".text-acc").innerHTML = "Miss"
      miss += 1
      HitValue = 0
      HitBonusValue = 0
      HitBonus = 0
      HitPunishment = 20000000

      Bonus = Bonus + HitBonus - HitPunishment

      if (Bonus > 100) {
        Bonus = 100
      } else if (Bonus < 0) {
        Bonus = 0
      }

      BaseScore += (MaxScore * 0.5 / TotalNotes) * (HitValue / 320)
      BonusScore += (MaxScore * 0.5 / TotalNotes) * (HitBonusValue * (Bonus ** 0.5) / 320)
      document.querySelector(".text-score").innerHTML = Math.round(BaseScore + BonusScore)
      document.querySelector(".text-combo").style.color = "#c1c1c1"
      document.querySelector(".text-combo span").innerHTML = 0
      scale = 1.2
      Scale();
      function Scale(params) {
        scale -= 0.01 ** scale
        setTimeout(() => {
          if (scale >= 0.224715) {
            document.querySelector(".text-acc").style.transform = `translateX(-50%) scale(${scale})`;
            Scale()
          }
        }, 1);
      }
    }
  })
}, 2);

function EndWin(time) {
  setTimeout(() => {
    end = true
    document.querySelector(".game").outerHTML = ""
    document.querySelector(".endgame").style.display = "block"

    document.querySelector(".score span").innerHTML = Math.round(BonusScore + BaseScore)
    document.querySelector(".combo span").innerHTML = MaxCombo
    if (perfect == TotalNotes) {
      document.querySelector(".fullp").innerHTML = "Full perfect!!!"
    } else if (MaxCombo == TotalNotes) {
      document.querySelector(".fullc").innerHTML = "Full combo!"
    }

    document.querySelector(".perfect span").innerHTML = perfect
    document.querySelector(".good span").innerHTML = good
    document.querySelector(".bad span").innerHTML = bad
    document.querySelector(".miss span").innerHTML = miss



    if (BonusScore + BaseScore == 1000000) {
      document.querySelector(".rank span").style.color = "gold"
      document.querySelector(".rank span").innerHTML = "M"
    } else if (BonusScore + BaseScore >= 900000) {
      document.querySelector(".rank span").style.color = "silver"
      document.querySelector(".rank span").innerHTML = "S"
    } else if (BonusScore + BaseScore >= 750000) {
      document.querySelector(".rank span").style.color = "red"
      document.querySelector(".rank span").innerHTML = "A"
    } else if (BonusScore + BaseScore >= 600000) {
      document.querySelector(".rank span").style.color = "#00ff00"
      document.querySelector(".rank span").innerHTML = "B"
    } else if (BonusScore + BaseScore >= 500000) {
      document.querySelector(".rank span").style.color = "#00ffff"
      document.querySelector(".rank span").innerHTML = "C"
    } else {
      document.querySelector(".rank span").style.color = "#7a7dff"
      document.querySelector(".rank span").innerHTML = "F"
    }
  }, 1000 * time);
}

// Menu

const play = document.querySelector(".play")
const settings = document.querySelector(".settings")

play.addEventListener("click", Play)
play.addEventListener("touchstart", Play)
document.querySelector(".quiteplay").addEventListener("click", QPlay)
document.querySelector(".quiteplay").addEventListener("touchstart", QPlay)
settings.addEventListener("click", Settings)
settings.addEventListener("touchstart", Settings)
document.querySelector(".quitese").addEventListener("click", QSettings)
document.querySelector(".quitese").addEventListener("touchstart", QSettings)


function Play() {
  document.querySelector(".menu").style.display = "none"
  document.querySelector(".playmenu").style.display = "flex"
}

function QPlay() {
  document.querySelector(".menu").style.display = "block"
  document.querySelector(".playmenu").style.display = "none"
}

function Settings() {
  document.querySelector(".menu").style.display = "none"
  document.querySelector(".settingsmenu").style.display = "block"
}
function QSettings() {
  document.querySelector(".menu").style.display = "block"
  document.querySelector(".settingsmenu").style.display = "none"
}

sound = true

document.querySelector(".sound").addEventListener("click", Sound)
document.querySelector(".sound").addEventListener("touchstart", Sound)

function Sound(params) {
  if (!sound) {
    sound = true
    document.querySelector(".sound span").innerHTML = "ON"
  } else {
    sound = false
    document.querySelector(".sound span").innerHTML = "OFF"
  }
}



// Songs


const song1btn = document.querySelector(".song1")
const song2btn = document.querySelector(".song2")
const song = document.querySelector(".Song")

song1btn.addEventListener("click", Song1)
song1btn.addEventListener("touchstart", Song1)
song2btn.addEventListener("click", Song2)
song2btn.addEventListener("touchstart", Song2)

function Song1() {
  document.querySelector(".playmenu").style.display = "none"
  song.style.display = "block"

  end = false

  TotalNotes = 105

  speed = 20

  CreateTile(1, 1, "A");
  CreateTile(1, 1.25, "F");
  CreateTile(1, 1.5, "A");
  CreateTile(1, 1.75, "F");
  CreateTile(1, 2, "A");

  CreateTile(1, 2.5, "S");
  CreateTile(1, 2.75, "F");
  CreateTile(1, 3, "A");
  CreateTile(1, 3.25, "F");
  CreateTile(1, 3.5, "S");

  CreateTile(1, 4, "D");
  CreateTile(1, 4.25, "A");
  CreateTile(1, 4.5, "F");
  CreateTile(1, 4.75, "A");
  CreateTile(1, 5, "D");

  CreateTile(1, 5.5, "F");
  CreateTile(1, 5.75, "A");
  CreateTile(1, 6, "F");
  CreateTile(1, 6.25, "A");
  CreateTile(1, 6.5, "F");

  CreateTile(1, 7, "S");
  CreateTile(1, 7, "F");
  CreateTile(1, 7.25, "A");
  CreateTile(1, 7.5, "S");
  CreateTile(1, 7.75, "D");
  
  CreateTile(1, 8.25, "S");
  CreateTile(1, 8.25, "F");
  CreateTile(1, 8.5, "A");
  CreateTile(1, 8.75, "S");
  CreateTile(1, 9, "D");

  CreateTile(1, 9.5, "S");
  CreateTile(1, 9.5, "F");
  CreateTile(1, 9.75, "A");
  CreateTile(1, 10, "S");
  CreateTile(1, 10.25, "D");

  CreateTile(1, 10.75, "S");
  CreateTile(1, 10.75, "F");
  CreateTile(1, 11, "A");
  CreateTile(1, 11.25, "S");
  CreateTile(1, 11.5, "D");

  CreateTile(1, 12, "A");
  CreateTile(1, 12, "S");
  CreateTile(1, 12, "F");
  
  CreateTile(1, 13, "S");
  CreateTile(1, 13, "D");
  CreateTile(1, 13, "F");

  CreateTile(1, 14, "F");
  CreateTile(1, 14.25, "D");
  CreateTile(1, 14.5, "F");
  CreateTile(1, 14.75, "D");
  CreateTile(1, 15, "A");

  CreateTile(1, 14, "S");
  CreateTile(1, 14.25, "A");
  CreateTile(1, 14.5, "S");
  CreateTile(1, 14.75, "A");
  CreateTile(1, 15, "F");

  CreateTile(1, 17.333, "F");
  CreateTile(1, 17.666, "D");
  CreateTile(1, 18, "S");
  CreateTile(1, 18.333, "A");
  CreateTile(1, 18.666, "S");
  CreateTile(1, 19, "A");
  CreateTile(1, 19.333, "S");
  CreateTile(1, 19.666, "D");
  CreateTile(1, 20, "S");

  CreateTile(1, 21, "A");
  CreateTile(1, 21, "S");
  CreateTile(1, 21.5, "D");
  CreateTile(1, 21.5, "F");
  CreateTile(1, 22, "A");
  CreateTile(1, 22, "D");
  CreateTile(1, 22.5, "S");
  CreateTile(1, 22.5, "F");
  CreateTile(1, 23, "A");
  CreateTile(1, 23, "F");
  CreateTile(1, 23.5, "D");
  CreateTile(1, 23.5, "S");

  CreateTile(1, 24, "A");
  CreateTile(1, 24, "S");
  CreateTile(1, 24.5, "A");
  CreateTile(1, 24.5, "D");
  CreateTile(1, 25, "S");
  CreateTile(1, 25, "D");
  CreateTile(1, 25.5, "S");
  CreateTile(1, 25.5, "F");
  CreateTile(1, 26, "D");
  CreateTile(1, 26, "F");
  CreateTile(1, 26.5, "D");
  CreateTile(1, 26.5, "A");

  CreateTile(1, 27, "A");
  CreateTile(1, 27.33, "S");
  CreateTile(1, 27.66, "A");
  CreateTile(1, 28, "D");
  CreateTile(1, 28.33, "S");
  CreateTile(1, 28.66, "D");
  CreateTile(1, 29, "S");
  CreateTile(1, 29.33, "F");
  CreateTile(1, 29.66, "D");
  CreateTile(1, 30, "F");
  CreateTile(1, 30.33, "D");
  CreateTile(1, 30.66, "A");

  CreateTile(1, 32, "A");
  CreateTile(1, 32, "S");
  CreateTile(1, 32, "D");
  CreateTile(1, 32, "F");

  EndWin(32.5)


}
function Song2() {
  document.querySelector(".playmenu").style.display = "none"
  song.style.display = "block"

  end = false

  TotalNotes = 47

  speed = 30
  
  CreateTile(1, 1, "A");
  CreateTile(1, 1.33, "S");
  CreateTile(1, 1.66, "A");
  CreateTile(1, 2, "D");
  CreateTile(1, 2.33, "S");
  CreateTile(1, 2.66, "D");
  CreateTile(1, 3, "S");
  CreateTile(1, 3.33, "F");
  CreateTile(1, 3.66, "D");
  CreateTile(1, 4, "F");
  CreateTile(1, 4.33, "D");
  CreateTile(1, 4.66, "A");
  CreateTile(1, 5, "A");
  CreateTile(1, 5, "S");
  CreateTile(1, 5.5, "A");
  CreateTile(1, 6.5, "D");
  CreateTile(1, 6, "S");
  CreateTile(1, 6, "D");
  CreateTile(1, 7.5, "S");
  CreateTile(1, 7.5, "F");
  CreateTile(1, 7, "D");
  CreateTile(1, 8, "F");
  CreateTile(1, 8.5, "D");
  CreateTile(1, 8.5, "A");
  CreateTile(1, 9.333, "A");
  CreateTile(1, 9.666, "D");
  CreateTile(1, 10, "S");
  CreateTile(1, 10.333, "A");
  CreateTile(1, 11.666, "S");
  CreateTile(1, 11, "A");
  CreateTile(1, 12.333, "S");
  CreateTile(1, 12.666, "D");
  CreateTile(1, 11, "D");
  CreateTile(1, 12.333, "A");
  CreateTile(1, 12.666, "F");
  CreateTile(1, 13, "S");
  CreateTile(1, 13.5, "S");
  CreateTile(1, 14, "S");
  CreateTile(1, 13.25, "A");
  CreateTile(1, 13.75, "D");
  CreateTile(1, 14.25, "D");
  CreateTile(1, 14.5, "F");
  CreateTile(1, 14.5, "A");

  CreateTile(1, 15, "A");
  CreateTile(1, 15, "S");
  CreateTile(1, 15, "D");
  CreateTile(1, 15, "F");

  EndWin(16)


}