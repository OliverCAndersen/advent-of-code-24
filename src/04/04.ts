import { readFileSync } from 'fs';

export function run04A() : void
{
    console.log('Running 04A')

    const fileContent = readFileSync('./input/04/input.txt', 'utf-8');

    var sum : number = 0;

    var regexMatch : RegExpMatchArray | null = fileContent.match(/mul\((\d{1,3}),(\d{1,3})\)/g);
	if (regexMatch != null)
	{
		for (let instruction of regexMatch)
		{
			var instructionRegexMatch : RegExpMatchArray | null = instruction.match(/\d+/g);
			if (instructionRegexMatch != null)
			{
				if (instructionRegexMatch.length > 1)
				{
					var firstNum: number = +instructionRegexMatch[0];
					var secondNum: number = +instructionRegexMatch[1];
					var product = firstNum * secondNum;
					//console.log(instruction + " -> " + firstNum + " * " + secondNum + " = " + product);
					sum += product;
				}
				else
				{
					console.error(instructionRegexMatch);
				}
			}
		}
	}

    console.log("Sum: " + sum)
}

function tryReadText(line : string, firstIndex : number, textToLookFor : string) : boolean
{
	if (firstIndex + textToLookFor.length >= line.length)
		return false;

    return line.substring(firstIndex, firstIndex + textToLookFor.length) == textToLookFor;
}

export function run04B() : void
{
    console.log('Running 04B')

	const fileContent = readFileSync('./input/04/input.txt', 'utf-8');

    var sum : number = 0;

	let doNext: boolean = true;
	for (let i = 0; i < fileContent.length; ++i)
	{
		let remainingText: string = fileContent.slice(i);
		var mulRegexMatch : RegExpMatchArray | null = remainingText.match(/^mul\((\d{1,3}),(\d{1,3})\)/g);
		if (mulRegexMatch != null)
		{
			let firstMatch: string = mulRegexMatch[0];
			if (doNext)
			{
				var digitsMatch : RegExpMatchArray | null = firstMatch.match(/\d+/g);
				if (digitsMatch != null && digitsMatch.length >= 2)
				{
					var firstNum: number = +digitsMatch[0];
					var secondNum: number = +digitsMatch[1];
					var product = firstNum * secondNum;
					//console.log(firstMatch + " -> " + firstNum + " * " + secondNum + " = " + product);
					sum += product;
				}
				else
				{
					console.error("failed to get digits from instruction.");
				}
			}
		}
		else if (remainingText.startsWith("do()"))
		{
			doNext = true;
		}
		else if (remainingText.startsWith("don't()"))
		{
			doNext = false;
		}
	}

    console.log("Sum: " + sum)
}