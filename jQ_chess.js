
/*
------------------------------------------------------------------------
Вариант 1 - через индексы елементов таблицы td
------------------------------------------------------------------------
*/


/*
var td = $("td");
console.log(td);

td.filter(function(i) {
	if (( i%10 == 0) || ( (i+1)%10 == 0) || (i<10) || (i>89)){

		td.filter(this).css('backgroundColor', '#6EE768').css('width', '20px').css('height', '20px')
	}

	else if ( (Math.floor(i/10) %2 == 0) && (i%2 != 0)|| ( Math.floor(i/10) %2 !=0 ) && (i%2 == 0)){
		console.log(i%10)
		$(this).css('backgroundColor', 'black')
	}
})

*/


/*
------------------------------------------------------------------------
Вариант 2 - через индексы елементов таблицы tr(i) и td(j) 
------------------------------------------------------------------------  */

/*var table = $('table');
console.log(table.find('tr'))
table.find('tr').each(function(i) {

	table.find(this).children('td').each(function(j) {
	
	//Разукрасим в зеленый и уменьшим размер
		if (i==0 || i==9 || j==0 || j==9 ) {
			table.find(this).css('backgroundColor', '#6EE768').css('width', '20px').css('height', '20px')
		}
	//Разукрасим черным цветом в шахматном порядке
		else if ((i%2==0 && j%2==0 ) || (i%2!=0 && j%2!=0) ) {
			$(this).css('backgroundColor', 'black')
		}
	})
})
*/


/*
------------------------------------------------------------------------
Вариант 3 - через текучий интерфейс 
------------------------------------------------------------------------  */
/*
$('table')
	.find('tr') // ищем елементы строк
//первые элементы строк делаем зеленым цветом и уменьшаем
	.find(':first')
	.css('backgroundColor', '#6EE768')
	.css('width', '20px')
	.end()
//последние элементы строк делаем зеленым цветом и уменьшаем
	.find(':last')
	.css('backgroundColor', '#6EE768')
	.css('width', '20px')
	.end()
	.end()
//выходим, ищем элементы строк

	.find('td:lt(10)')
	.css('backgroundColor', '#6EE768')
	.css('height', '20px')
	.end()

	.find('td:gt(89)')
	.css('backgroundColor', '#6EE768')
	.css('height', '20px')
	.end()
	.end()
//Разукрашиваем черные квадраты
	.not()*/


// console.log( $('table').find('tr').not(':first-child').not(':last-child').css('backgroundColor','black'))

/*console.log($('table').find('tr:nth-child(even) td:odd'));*/

$('table')
	.find('tr') // ищем елементы строк
//первые и последние элементы строк (т.е. первый и последний столбец) делаем зеленым цветом и уменьшаем
	.find(':first, :last')
	.css({	'backgroundColor': '#6EE768',
			'width': '20px'	})
	.end()
	.end()
//выходим, элементы первой и последней строки также уменьшаем и делаем зеленым цветом
	.find('td:lt(10), td:gt(89)') 
	.css({	'backgroundColor': '#6EE768',
			'height': '20px'	})
	.end()

	/*	БОЛЬШОЕ РЕШЕНИЕ
--------------------------------------------------------------------------------
	.find('tr:nth-child(even) td:odd') //четная строка таблицы, нечетные столбцы
	.not('tr:last-child, td:gt(18)') // исключаем последнюю строку и после 15 элемента
	.css('backgroundColor','black')
	.end()
	.end()
	.find('tr:nth-child(odd) td:even')
	.not('tr:first-child, td:lt(4)')
	.css('backgroundColor','black')
--------------------------------------------------------------------------------
	*/
	
	.find(':nth-child(even) td:odd, tr:nth-child(odd) td:even')// ?????  Почему в первом случае не надо ставить tr а во втором надо???
	.not(':gt(44), :Lt(5), :last-child, :first-child') //удаляем из набора сделанные элементы
	.css('backgroundColor','black')


/*	.find('tr:not(:first:last) td:gt(1)')
	.css('backgroundColor','black')
	.end()
*/
