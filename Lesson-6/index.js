let shipName = prompt('Уважаемый клиент добро пожаловать в проект Альфа! Вам предоставляется уникальная возможность создать свой собственный корабль по программе Панагиотис. Давайте, незамедлительно преступим. Итак, дайте название вашему кораблю!')
console.log(shipName)
let fuelLevel = prompt('Сколько топлива вам нужно, чтобы отправиться на миссию?')
console.log(fuelLevel)
let maxFuellevel = prompt('Максимальное количество топлива в корабле?')
console.log(maxFuellevel)
let shipSpeed = prompt('Укажите скорость корабля')
console.log(shipSpeed)

alert('Корабль готов к вылету!')
alert('Текущее количество топлива в корабле: ' + fuelLevel)
alert('Максимальное количество топлива в корабле: ' + maxFuellevel)
alert('Cкорость корабля: ' + shipSpeed)

let distance = prompt('Теперь давайте мы посчитаем время вашего полёта до первой звездной системы. Это Андрамеда. Для этого вам нужно указать расстояние между Андрамедой и Млечной путью')

let time = 0
function flightTime(distance, shipSpeed) {
  time = distance / shipSpeed
}
flightTime(distance, shipSpeed)
alert('Время полета до звездной системы: ' + time)

let consumption = 0
function fuelConsumption(shipSpeed, time) {
  consumption = shipSpeed / time
}
fuelConsumption(shipSpeed, time)
alert('Расход топлива составит ' + consumption)

function fuelRemaininig(distance, consumption, time) {
  remaining = distance / consumption / time
  if (remaining <= 3) {
    alert('Остаток топлива в корабле меньше 10. Критическое состояние! Необходимо срочно залить топливо. Корабль ломается при нехватке топлива!')
  }
  else {
    alert('Полет прошел успешно!')
  }
}
fuelRemaininig(distance, consumption, time)

alert('Теперь мы можем посчитать время до следующей звездной системы. Это Вега.')
let starSystems = ['Andromeda', 'Vega']
let system = [
  {
    name: 'Andromeda',
    distance: 50
  },
  {
    name: 'Vega',
    distance: 80
  }
]
system.forEach(el => {
  console.log(el);
})



