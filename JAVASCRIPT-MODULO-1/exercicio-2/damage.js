const attack = prompt("What's the name of the attacker character?");
const attackPower = parseFloat(prompt("What's your Attack Power?"));

const defense = prompt("What's the name of the defensor character?");
let lifePoints = parseFloat(prompt('How many life points does he have?'));
const defensePower = parseFloat(prompt("What's your Defense Power?"));
const shield = prompt('Does he have a shield? (Yes/No)');

let damage = 0;

if (attackPower > defensePower && shield === 'No') {
    damage = attackPower - defensePower;

} else if (attackPower > defensePower && shield === 'Yes') {
    damage = (attackPower - defensePower) / 2;
}

lifePoints -= damage

alert(attack + " causou " + damage + " pontos de dano em " + defense)
alert(
  attack + "\nPoder de ataque: " + attackPower + "\n\n" +
  defense + "\nPontos de vida: " + lifePoints +
  "\nPoder de defesa: " + defensePower + "\nPossui escudo: " + shield
)