/*global console, moment*/

/*
@codekit-prepend "libs/moment.min.js";
*/


// app ------

(function($) {

	var raceday = {

		PLANS: [
			{
				label: 'Marathon - Novice 1 - 18 week',
				schedule: [
					'Rest','3 m run','3 m run','3 m run','Rest','6','Cross',
					'Rest','3 m run','3 m run','3 m run','Rest','7','Cross',
					'Rest','3 m run','4 m run','3 m run','Rest','5','Cross',
					'Rest','3 m run','4 m run','3 m run','Rest','9','Cross',
					'Rest','3 m run','5 m run','3 m run','Rest','10','Cross',
					'Rest','3 m run','5 m run','3 m run','Rest','7','Cross',
					'Rest','3 m run','6 m run','3 m run','Rest','12','Cross',
					'Rest','3 m run','6 m run','3 m run','Rest','Rest','Half Marathon',
					'Rest','3 m run','7 m run','4 m run','Rest','10','Cross',
					'Rest','3 m run','7 m run','4 m run','Rest','15','Cross',
					'Rest','4 m run','8 m run','4 m run','Rest','16','Cross',
					'Rest','4 m run','8 m run','5 m run','Rest','12','Cross',
					'Rest','4 m run','9 m run','5 m run','Rest','18','Cross',
					'Rest','5 m run','9 m run','5 m run','Rest','14','Cross',
					'Rest','5 m run','10 m run','5 m run','Rest','20','Cross',
					'Rest','5 m run','8 m run','4 m run','Rest','12','Cross',
					'Rest','4 m run','6 m run','3 m run','Rest','8','Cross',
					'Rest','3 m run','4 m run','2 m run','Rest','Rest','Marathon'
				],
				link: 'http://www.halhigdon.com/training/51137/Marathon-Novice-1-Training-Program'
			},
			{
				label: 'Marathon - Novice 2 - 18 week',
				schedule: [
					'Rest','3 m run','5 m pace','3 m run','Rest','8','Cross',
					'Rest','3 m run','5 m run','3 m run','Rest','9','Cross',
					'Rest','3 m run','5 m pace','3 m run','Rest','6','Cross',
					'Rest','3 m run','6 m pace','3 m run','Rest','11','Cross',
					'Rest','3 m run','6 m run','3 m run','Rest','12','Cross',
					'Rest','3 m run','6 m pace','3 m run','Rest','9','Cross',
					'Rest','4 m run','7 m pace','4 m run','Rest','14','Cross',
					'Rest','4 m run','7 m run','4 m run','Rest','15','Cross',
					'Rest','4 m run','7 m pace','4 m run','Rest','Rest','Half Marathon',
					'Rest','4 m run','8 m pace','4 m run','Rest','17','Cross',
					'Rest','5 m run','8 m run','5 m run','Rest','18','Cross',
					'Rest','5 m run','8 m pace','5 m run','Rest','13','Cross',
					'Rest','5 m run','5 m pace','5 m run','Rest','19','Cross',
					'Rest','5 m run','8 m run','5 m run','Rest','12','Cross',
					'Rest','5 m run','5 m pace','5 m run','Rest','20','Cross',
					'Rest','5 m run','4 m pace','5 m run','Rest','12','Cross',
					'Rest','4 m run','3 m run','4 m run','Rest','8','Cross',
					'Rest','3 m run','2 m run','Rest','Rest','2 m run','Marathon'
				],
				link: 'http://www.halhigdon.com/training/51138/Marathon-Novice-2-Training-Program'
			},
			{
				label: 'Marathon - Intermediate 1 - 18 week',
				schedule: [
					'Cross','3 m run','5 m run','3 m run','Rest','5 m pace','8',
					'Cross','3 m run','5 m run','3 m run','Rest','5 m run','9',
					'Cross','3 m run','5 m run','3 m run','Rest','5 m pace','6',
					'Cross','3 m run','6 m run','3 m run','Rest','6 m pace','11',
					'Cross','3 m run','6 m run','3 m run','Rest','6 m run','12',
					'Cross','3 m run','5 m run','3 m run','Rest','6 m pace','9',
					'Cross','4 m run','7 m run','4 m run','Rest','7 m pace','14',
					'Cross','4 m run','7 m run','4 m run','Rest','7 m run','15',
					'Cross','4 m run','5 m run','4 m run','Rest','Rest','Half Marathon',
					'Cross','4 m run','8 m run','4 m run','Rest','8 m pace','17',
					'Cross','5 m run','8 m run','5 m run','Rest','8 m run','18',
					'Cross','5 m run','5 m run','5 m run','Rest','8 m pace','13',
					'Cross','5 m run','8 m run','5 m run','Rest','5 m pace','20',
					'Cross','5 m run','5 m run','5 m run','Rest','8 m run','12',
					'Cross','5 m run','8 m run','5 m run','Rest','5 m pace','20',
					'Cross','5 m run','6 m run','5 m run','Rest','4 m pace','12',
					'Cross','4 m run','5 m run','4 m run','Rest','3 m run','8',
					'Cross','3 m run','4 m run','Rest','Rest','2 m run','Marathon'
				],
				link: 'http://www.halhigdon.com/training/51139/Marathon-Intermediate-1-Training-Program'
			},
			{
				label: 'Marathon - Intermediate 2 - 18 week',
				schedule: [
					'Cross','3 m run','5 m run','3 m run','Rest','5 m pace','10',
					'Cross','3 m run','5 m run','3 m run','Rest','5 m run','11',
					'Cross','3 m run','6 m run','3 m run','Rest','6 m pace','8',
					'Cross','3 m run','6 m run','3 m run','Rest','6 m pace','13',
					'Cross','3 m run','7 m run','3 m run','Rest','7 m run','14',
					'Cross','3 m run','7 m run','3 m run','Rest','7 m pace','10',
					'Cross','4 m run','8 m run','4 m run','Rest','8 m pace','16',
					'Cross','4 m run','8 m run','4 m run','Rest','8 m run','17',
					'Cross','4 m run','9 m run','4 m run','Rest','Rest','Half Marathon',
					'Cross','4 m run','9 m run','4 m run','Rest','9 m pace','19',
					'Cross','5 m run','10 m run','5 m run','Rest','10 m run','20',
					'Cross','5 m run','6 m run','5 m run','Rest','6 m pace','12',
					'Cross','5 m run','10 m run','5 m run','Rest','10 m pace','20',
					'Cross','5 m run','6 m run','5 m run','Rest','6 m run','12',
					'Cross','5 m run','10 m run','5 m run','Rest','10 m pace','20',
					'Cross','5 m run','8 m run','5 m run','Rest','4 m pace','12',
					'Cross','4 m run','6 m run','4 m run','Rest','4 m run','8',
					'Cross','3 m run','4 m run','Rest','Rest','2 m run','Marathon'
				],
				link: 'http://www.halhigdon.com/training/51140/Marathon-Intermediate-2-Training-Program'
			},
			{
				label: 'Half Marathon - Novice 1 - 12 week',
				schedule: [
					'Stretch & strengthen','3 m run','2 m run or cross','3 m run + strength','Rest','30 min cross','4 m run',
					'Stretch & strengthen','3 m run','2 m run or cross','3 m run + strength','Rest','30 min cross','4 m run',
					'Stretch & strengthen','3.5 m run','2 m run or cross','3.5 m run + strength','Rest','40 min cross','5 m run',
					'Stretch & strengthen','3.5 m run','2 m run or cross','3.5 m run + strength','Rest','40 min cross','5 m run',
					'Stretch & strengthen','4 m run','2 m run or cross','4 m run + strength','Rest','40 min cross','6 m run',
					'Stretch & strengthen','4 m run','2 m run or cross','4 m run + strength','Rest or easy run','Rest','5-K Race',
					'Stretch & strengthen','4.5 m run','3 m run or cross','4.5 m run + strength','Rest','50 min cross','7 m run',
					'Stretch & strengthen','4.5 m run','3 m run or cross','4.4 m run + strength','Rest','50 min cross','8 m run',
					'Stretch & strengthen','5 m run','3 m run or cross','5 m run + strength','Rest or easy run','Rest','10-K Race',
					'Stretch & strengthen','5 m run','3 m run or cross','5 m run + strength','Rest','60 min cross','9 m run',
					'Stretch & strengthen','5 m run','3 m run or cross','5 m run + strength','Rest','60 min cross','10 m run',
					'Stretch & strengthen','4 m run','3 m run or cross','2 m run','Rest','Rest','Half Marathon'
				],
				link: 'http://www.halhigdon.com/training/51131/Half-Marathon-Novice-1-Training-Program'
			}
		],

		init: function() {

			var t = this;

			t.initForm();

		},

		initForm: function() {
			var t = this,
				monthsOpts = '',
				daysOpts = '',
				yearsOpts = '',
				plansOpts = '',
				i, d, now, selected;


			// construct month options ---

			now = moment();

			for (i = 0; i < 12; i++) {
				monthsOpts += '<option value="' + now.format('MM') + '">' + now.format('MMMM') + '</option>';
				now.add('months', 1);
			}

			$('select.months').append(monthsOpts);


			// construct month options ---

			now = moment();

			for (i = 0; i < 31; i++) {
				d = t.pad(i+1);
				selected = now.format('D') === d ? ' selected' : '';
				daysOpts += '<option value="' + d + '"' + selected + '>' + d + '</option>';
			}

			$('select.days').append(daysOpts);


			// construct year options ---
			
			now = moment();

			for (i = 0; i < 10; i++) {
				yearsOpts += '<option value="' + now.year() + '">' + now.year() + '</option>';
				now.add('years', 1);
			}

			$('select.years').append(yearsOpts);


			// construct plan options ---
			
			$.each(t.PLANS, function(index, el) {
				plansOpts += '<option value="' +index + '">' + el.label + '</option>';
			});

			$('select.plans').append(plansOpts);

			// button handler ---

			$('.btn-submit').on('click', function(e) {
				e.preventDefault();
				t.createSchedule();
			});

		},

		createSchedule: function() {
			var t = this,
				selectedMonth = $('select.months').val(),
				selectedDay = $('select.days').val(),
				selectedYear = $('select.years').val(),
				selectedPlan = $('select.plans').val(),
				schedule = t.PLANS[selectedPlan].schedule,
				i = 0, j, len = schedule.length,
				raceDay = moment(selectedYear + '-' + selectedMonth + '-' + selectedDay),
				schedDay = moment(selectedYear + '-' + selectedMonth + '-' + selectedDay),
				today = moment(),
				lastDayOfWeek = 0,
				cellClass = '',
				output = '';

			schedDay.subtract('days', len - 1);

			output += '<h3><a href="' + t.PLANS[selectedPlan].link + '" target="_blank">' + t.PLANS[selectedPlan].label + '</a></h3>';
			output += '<table class="calendar">';
			output += '<thead>';
			output += '<tr>';
			output += '<th>Sun</th>';
			output += '<th>Mon</th>';
			output += '<th>Tue</th>';
			output += '<th>Wed</th>';
			output += '<th>Thu</th>';
			output += '<th>Fri</th>';
			output += '<th>Sat</th>';
			output += '</tr>';
			output += '</thead>';
			output += '<tbody>';
			output += '<tr>';

			// fill beginning empty days of this week
			if (schedDay.format('d') !== '0') {
				j = Number(schedDay.format('d'));
				while (j--) {
					output += '<td class="empty">&nbsp;</td>';
				}
			}

			// 
			while (i < len) {

				// style cell
				cellClass = '';

				if (schedDay.format('YYY MM DD') < today.format('YYY MM DD')) {
					cellClass = 'past';
				}

				if (schedDay.format('YYY MM DD') === raceDay.format('YYY MM DD')) {
					cellClass = 'race';
				}

				if (schedDay.format('YYY MM DD') === today.format('YYY MM DD')) {
					cellClass = 'today';
				}

				// start new row?
				if (schedDay.format('d') === '0') {
					output += '<tr>';
				}

				// build cell
				output += '<td class="' + cellClass + '"">';
				output += '<span class="date">' + schedDay.format('MMM D, YYYY') + '</span>';
				output += '<span class="plan">' + schedule[i] + '</span>';
				output += '</td>';
				
				// end row?
				lastDayOfWeek = schedDay.format('d');
				if (lastDayOfWeek === '6') {
					output += '</tr>';
				}

				schedDay.add('days', 1);
				i++;
			}

			// fill ending empty days of this week
			if (lastDayOfWeek !== '6') {
				j = Number(lastDayOfWeek);
				while (j < 6) {
					output += '<td class="empty">&nbsp;</td>';
					j++;
				}
			}

			output += '</tbody>';
			output += '</table>';

			// other info
			output += '<p class="src-link"><a href="' + t.PLANS[selectedPlan].link + '" target="_blank">Schedule source and more info</a></p>';

			$('.schedule').html(output);

		},

		pad: function(num) {
			if (num < 10) {
				num = '0' + num;
			} else {
				num = String(num);
			}
			return num;
		}

	};

	$(function() {
		raceday.init();
	});


}(jQuery));