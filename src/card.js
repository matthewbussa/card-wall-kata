var createCard = function(name, description, priority) {

		var addPerson = function(person) {
				if (assigneeNotFound(person)) {
					addPersonToAssignees(person);
				};
			};

		var assigneeNotFound = function(person) {
				return card.assignees.indexOf(person) === -1;
			};

		var addPersonToAssignees = function(person) {
				card.assignees.push(person);

			};


		var card = {
			name: name,
			description: description,
			priority: priority,
			done: false,
			blocked: false,
			assignees: [],
			addPerson: addPerson,
			complexity: 2,
			startDate: null,
			endDate: null
		};


		return card;

	};

var createWall = function() {

		var initialCards = [];
		if (localStorage.cards) {
			initialCards = JSON.parse(localStorage.cards);
		}

		var wall = {
			cards: initialCards,
			addCard: function(card, statusIndex) {
				statusIndex = statusIndex || 0;
				var status = this.cards[statusIndex];
				if (!status) {
					status = this.cards[statusIndex] = {
						cards: []
					};
				}
				var cardsForStatus = status.cards;
				cardsForStatus.push(card);
				cardsForStatus.sort(function(a, b) {
					return b.priority - a.priority;
				});
				localStorage.cards = JSON.stringify(this.cards);
			},

			removeCard: function(card) {
				_(this.cards).each(function(status) {
					status.cards = _(status.cards).without(card);
				});
				localStorage.cards = JSON.stringify(this.cards);
			},

			completeCard: function(card) {
				card.done = true;
			},

			blockCard: function(card) {
				card.blocked = true;
			},

			completedCards: function() {
				return _(this.allCards()).filter(function(card) {
					return card.done;
				});
			},

			blockedCards: function() {
				return _(this.allCards()).filter(function(card) {
					return card.blocked;
				});
			},

			startWork: function(card) {
				card.startDate = new Date();
			},

			allCards: function() {
				var cards = [];
				_(this.cards).each(function(status) {
					cards = cards.concat(status.cards);
				});
				return cards;
			},

			addStatus: function(name) {
				this.cards.push({
					name: name,
					cards: []
				});
				localStorage.cards = JSON.stringify(this.cards);
			}

		};
		return wall;

	};