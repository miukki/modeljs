;(function () {
  window.APP = {};

	var DEFAULT_IMAGE = {
		'user': {
			'small':      '/static/common/img/default-s.png',
			'medium':     '/static/common/img/default-m.png',
			'large':      '/static/common/img/default-l.png'
		},

		'episode': {
			'normal':     '/static/common/img/episode-n.jpg',
			'retina':     '/static/common/img/episode-r.jpg'
		},

		'app': {
			'small':      '/static/common/img/app-s.jpg',
			'medium':     '/static/common/img/app-m.jpg',
			'large':      '/static/common/img/app-l.jpg'
		},

		'book': {
			'poster': {
				'small':  '/static/social/img/book-splash-s.jpg',
				'medium':  '/static/social/img/book-splash-m.jpg',
				'large':  '/static/social/img/book-splash-l.jpg'
			}
		}
	};

	APP.model = {

		'user': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.email = (undefined != src.email) ? String(src.email) : '';
			this.login = (undefined != src.login) ? String(src.login) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.role = (undefined != src.role) ? String(src.role) : '';
			this.friendStatus = (undefined != src.friendStatus) ? String(src.friendStatus) : '';
			this.registered = Number(src.registered) || 0;
			this.money = Number(src.money) || 0;
			this.balance = Number(src.balance) || 0;
			this.friendCount = Number(src.friendCount) || 0;
			this.adminForum = Boolean(src.adminForum) || false;
			this.flags = (src.flags && ('object' == typeof src.flags)) ? src.flags : [];

			this.warnings = (src.warnings && ('object' == typeof src.warnings)) ? src.warnings : {};
			this.serialIds = src.serialIds || (src.serial_ids && ('object' == typeof src.serial_ids)) ? src.serial_ids : [];

			this.banReason = (undefined != src.banReason) ? String(src.banReason) : '';
			this.banTime = Number(src.banTime) || 0;
			this.banForum = this.banTime > new Date();
			this.vip = $.inArray('vip', this.flags) >= 0;

			this.isFriendRequest = (src.friendStatus == 'request') ? true : false;
			this.isFriend = (src.friendStatus == 'friend') ? true : false;
			this.isFriendWait = (src.friendStatus == 'wait') ? true : false;

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.small = (undefined != this.image.small) ? String(this.image.small) : DEFAULT_IMAGE.user.small;
				this.image.medium = (undefined != this.image.medium) ? String(this.image.medium) : DEFAULT_IMAGE.user.medium;
				this.image.large = (undefined != this.image.large) ? String(this.image.large) : DEFAULT_IMAGE.user.large;
			};
		},

		'serial': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.studio = (undefined != src.studio) ? String(src.studio) : '';
			this.video = (undefined != src.video) ? String(src.video) : '';
			this.alias = (undefined != src.alias) ? String(src.alias) : '';
			this.genreId = Number(src.genreId) || 0;
			this.sort = Number(src.sort) || 0;
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;
            this.minAge = Number(src.minAge) || 0;
            this.rating = Number(sprintf('%0.2f', src.rating)) || 0;
            this.rated = Number(src.rated) || 0;
            this.userRating = Number(src.userRating) || 0;
            this.count = Number(src.count) || 0;
            this.orientation = Number(src.orientation) || 0;
			this.index = Boolean(src.index) || false;
			this.comingSoon = Boolean(src.comingSoon) || false;
			this.subscribed = Boolean(src.subscribed) || false;
			this.categories = (src.categories && ('object' == typeof src.categories)) ? src.categories : [];

			this.iap = [];
			if (src.iap && src.iap.length) {
				for (var i in src.iap) {
					this.iap.push(new APP.model.subscription(src.iap[i]));
				};
			};

			this.ratingObject = (src.ratingObject && ('object' == typeof src.ratingObject)) ? src.ratingObject : {};

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.normal = (undefined != this.image.normal) ? String(this.image.normal) : '';
				this.image.retina = (undefined != this.image.retina) ? String(this.image.retina) : '';
			};

			this.imageSquare = (src.imageSquare && ('object' == typeof src.imageSquare)) ? src.imageSquare : {};
			if (this.imageSquare) {
				this.imageSquare.normal = (undefined != this.imageSquare.normal) ? String(this.imageSquare.normal) : '';
				this.imageSquare.retina = (undefined != this.imageSquare.retina) ? String(this.imageSquare.retina) : '';
			};

			this.imageSocial = (src.imageSquare && ('object' == typeof src.imageSocial)) ? src.imageSocial : {};
			if (this.imageSocial) {
				this.imageSocial.normal = (undefined != this.imageSocial.normal) ? String(this.imageSocial.normal) : '';
			};

			this.poster = (src.poster && ('object' == typeof src.poster)) ? src.poster : {};
			if (this.poster) {
				this.poster.small = (undefined != this.poster.small) ? String(this.poster.small) : '';
				this.poster.medium = (undefined != this.poster.medium) ? String(this.poster.medium) : '';
				this.poster.large = (undefined != this.poster.large) ? String(this.poster.large) : '';
			};

			if (src.genre) {
				this.genre = new APP.model.genre(src.genre);
			};

			if (src.forum) {
				this.forum = new APP.model.forum(src.forum);
			};

			if (src.topic) {
				this.topic = new APP.model.topic(src.topic);
			};
		},

		'episode': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.serialId = (undefined != src.serialId) ? String(src.serialId) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.seasonNumber = (undefined != src.seasonNumber) ? String(src.seasonNumber) : '';
			this.status = (undefined != src.status) ? String(src.status) : '';
			this.alias = (undefined != src.alias) ? String(src.alias) : '';
			this.season = Number(src.season) || 0;
			this.number = Number(src.number) || 0;
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;
			this.published = Number(src.published) || 0;
			this.calendarDate = Number(src.calendarDate) || 0;
			this.price = Number(src.price) || 0;
			this.rating = Number(sprintf('%0.2f', src.rating)) || 0;
            this.rated = Number(src.rated) || 0;
            this.userRating = Number(src.userRating) || 0;
            this.orientation = Number(src.orientation) || 0;
			this.statusName = APP.cst.STATUS[this.status] || '';
			this.comingSoon = this.status != 'published';
			this.shelf = Boolean(src.shelf) || false;
			this.remove = Boolean(src.remove) || false;
			this.calendar = Boolean(src.calendar) || false;
			this.isNew = Boolean(src.isNew) || false;
			this.isPublished = Boolean(src.isPublished) || false;
			this.isRead = Boolean(src.isRead) || false;
			this.isPurchased = Boolean(src.isPurchased) || false;
			this.uploadUrl = src.uploadUrl || (undefined != src.content_upload_url) ? String(src.content_upload_url) : '';

			this.ratingObject = (src.ratingObject && ('object' == typeof src.ratingObject)) ? src.ratingObject : {};

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.normal = (undefined != this.image.normal) ? String(this.image.normal) : DEFAULT_IMAGE.episode.normal;
				this.image.retina = (undefined != this.image.retina) ? String(this.image.retina) : DEFAULT_IMAGE.episode.retina;
			};

			this.imageSquare = (src.imageSquare && ('object' == typeof src.imageSquare)) ? src.imageSquare : {};
			if (this.imageSquare) {
				this.imageSquare.normal = (undefined != this.imageSquare.normal) ? String(this.imageSquare.normal) : '';
				this.imageSquare.retina = (undefined != this.imageSquare.retina) ? String(this.imageSquare.retina) : '';
			};

			if (src.serial) {
				this.serial = new APP.model.serial(src.serial);
			};

			if (src.topic) {
				this.topic = new APP.model.topic(src.topic);
			};

			this.screenshots = [];
			if (src.screenshots) {
				for (var i in src.screenshots) {
					src.screenshots[i].objectId = this.id;
					this.screenshots.push(new APP.model.screenshot(src.screenshots[i]));
				};
			};
		},

		'content': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.status = (undefined != src.status) ? String(src.status) : '';
			this.player = (undefined != src.player) ? String(src.player) : '';
			this.version = (undefined != src.version) ? String(src.version) : '';
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;
			this.canPublish = Boolean(src.canPublish) || false;
			this.canReject = Boolean(src.canReject) || false;
			this.canDelete = Boolean(src.canDelete) || false;
			this.canPreview = Boolean(src.canPreview) || false;
			this.flags = (src.flags && ('object' == typeof src.flags)) ? src.flags : [];

			this.file = (src.file && ('object' == typeof src.file)) ? src.file : {};
			if (this.file) {
				this.file.md5 = (undefined != this.file.md5) ? String(this.file.md5) : '';
				this.file.size = Number(this.file.size) || 0;
				this.file.url = (undefined != this.file.url) ? String(this.file.url) : '';
			};

			this.files = [];
			if (src.files) {
				for (var i in src.files) {
					this.files.push(src.files[i]);
				};
			};

		},

		'news': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.preview = (undefined != src.preview) ? String(src.preview) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.category = (undefined != src.category) ? String(src.category) : '';
			this.categoryName = (undefined != src.categoryName) ? String(src.categoryName) : '';
			this.source = (undefined != src.source) ? String(src.source) : '';
			this.lang = (undefined != src.lang) ? String(src.lang) : '';
			this.alias = (undefined != src.alias) ? String(src.alias) : '';
			this.date = Number(src.date) || 0;
			this.created = Number(src.created) || 0;

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.small = (undefined != this.image.small) ? String(this.image.small) : '';
				this.image.medium = (undefined != this.image.medium) ? String(this.image.medium) : '';
			};
		},

		'page': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.text = (undefined != src.text) ? String(src.text) : '';
		},

		'faq': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.question = (undefined != src.question) ? String(src.question) : '';
			this.answer = (undefined != src.answer) ? String(src.answer) : '';
		},

		'forum': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.hidden = Boolean(src.hidden) || false;
			this.div = Boolean(src.div) || false;
			this.sort = Number(src.sort) || 0;
			this.count = Number(src.count) || 0;
			this.countNewTopic = Number(src.countNewTopic) || 0;
		},

		'topic': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.forumId = (undefined != src.forumId) ? String(src.forumId) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.lang = (undefined != src.lang) ? String(src.lang) : '';
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;
			this.count = Number(src.count) || 0;
			this.countNewMessage = Number(src.countNewMessage) || 0;
			this.hidden = Boolean(src.hidden) || false;
			this.sticky = Boolean(src.sticky) || false;
			this.admin = Boolean(src.admin) || false;
			this.closed = Boolean(src.closed) || false;
			this.subscribed = Boolean(src.subscribed) || false;
			this.author = null;

			if (src.author) {
				this.author = new APP.model.user(src.author);
			};

			this.canDelete = false;
			this.canEdit = false;
			this.canClose = false;
			this.isAuthor = false;
			if (APP.user) {
				this.isAuthor = this.author && (this.author.id == APP.user.id);
				this.canClose = APP.user.adminForum;
				this.canEdit = (this.isAuthor && !this.author.banForum) || (APP.user.adminForum && !APP.user.banForum);
				this.canDelete = (this.isAuthor && !this.author.banForum) || (APP.user.adminForum && !APP.user.banForum);
			};

			this.authors = [];
			if (src.authors) {
				for (var i in src.authors) {
					this.authors.push(new APP.model.user(src.authors[i]));
				};
			};
		},

		'message': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.text = (undefined != src.text) ? String(src.text) : '';
			this.created = Number(src.created) || 0;
			this.deleted = Number(src.deleted) || 0;
			this.author = null;

			if (src.author) {
				this.author = new APP.model.user(src.author);
			};

			this.canDelete = false;
			this.canEdit = false;
			this.isAuthor = false;

			if (APP.user) {
				this.isAuthor = this.author && (this.author.id == APP.user.id);
				this.canEdit = !this.deleted && ((this.isAuthor && !this.author.banForum) || (APP.user.adminForum && !APP.user.banForum));
				this.canDelete = !this.deleted && ((this.isAuthor && !this.author.banForum) || APP.user.adminForum && !APP.user.banForum);
			};
		},

		'genre': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.alias = (undefined != src.alias) ? String(src.alias) : '';
		},

		'book': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.authorId = (undefined != src.authorId) ? String(src.authorId) : '';
			this.fontId = (undefined != src.fontId) ? String(src.fontId) : '';
			this.font = (undefined != src.font) ? String(src.font) : '';
			this.rejectMessage = (undefined != src.rejectMessage) ? String(src.rejectMessage) : '';
			this.lang = (undefined != src.lang) ? String(src.lang) : '';
			this.save = (undefined != src.save) ? String(src.save) : '';
			this.status = APP.cfg.status.book[src.status];
			this.statusName = APP.cst.STATUS[this.status];
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;
			this.orientation = Number(src.orientation) || 0;
			this.published = this.updated;
			this.reviewDate = Number(src.reviewDate) || 0;
            this.rating = Number(sprintf('%0.2f', src.rating)) || 0;
            this.rated = Number(src.rated) || 0;
            this.userRating = Number(src.userRating) || 0;
            this.comingSoon = false;

            this.ratingObject = (src.ratingObject && ('object' == typeof src.ratingObject)) ? src.ratingObject : {};

			this.font = '';
			if (undefined != src.font) {
				var a = src.font.split('/');
				if (a.length) {
					this.font = '/data/' + a[a.length - 1];
				};
			};

			this.canReview = Boolean(src.canReview) || false;
			this.canPublish = Boolean(src.canPublish) || false;
			this.canUnpublish = Boolean(src.canUnpublish) || false;
			this.canReject = Boolean(src.canReject) || false;
			this.canEdit = Boolean(src.canEdit) || false;
			this.canDelete = Boolean(src.canDelete) || false;

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.small = (undefined != this.image.small) ? String(this.image.small) : '';
				this.image.normal = (undefined != this.image.normal) ? String(this.image.normal) : '';
				this.image.retina = (undefined != this.image.retina) ? String(this.image.retina) : '';
			};

			this.imageSquare = (src.image && ('object' == typeof src.imageSquare)) ? src.imageSquare : {};
			if (this.imageSquare) {
				this.imageSquare.normal = (undefined != this.imageSquare.normal) ? String(this.imageSquare.normal) : '';
				this.imageSquare.retina = (undefined != this.imageSquare.retina) ? String(this.imageSquare.retina) : '';
			};

			this.file = (src.file && ('object' == typeof src.file)) ? src.file : {};
			if (this.file) {
				this.file.md5 = (undefined != this.file.md5) ? String(this.file.md5) : '';
				this.file.url = (undefined != this.file.url) ? String(this.file.url) : '';
				this.file.size = Number(this.file.size) || 0;
			};

			this.info = (src.info && ('object' == typeof src.info)) ? src.info : {};
			if (this.info) {
				this.info.pages = Number(this.info.pages) || 0;
			};

			this.poster = DEFAULT_IMAGE.book.poster;

			if (src.author) {
				this.author = new APP.model.user(src.author);
			};

			if (src['interface']) {
				this.iface = new APP.model.bookInterface(src['interface']);
			} else
			if (src.iface) {
				this.iface = new APP.model.bookInterface(src.iface);
			};

			this.category = (src.category && ('object' == typeof src.category)) ? src.category : {};
			if (this.category) {
				this.category.id = (undefined != this.category.id) ? String(this.category.id) : '';
				this.category.name = (undefined != this.category.name) ? String(this.category.name) : '';
			};
		},

		'bookObject': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.authorId = (undefined != src.authorId) ? String(src.authorId) : '';
			this.type = Number(src.type) || 0;
			this.canDelete = Boolean(src.canDelete) || false;
			this.deleted = Boolean(src.deleted) || false;

			if (src.author) {
				this.author = new APP.model.user(src.author);
			};

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.small = (undefined != this.image.small) ? String(this.image.small) : '';
				this.image.medium = (undefined != this.image.medium) ? String(this.image.medium) : '';
				this.image.large = (undefined != this.image.large) ? String(this.image.large) : '';
			};

			this.audio = (src.audio && ('object' == typeof src.audio)) ? src.audio : {};
			if (this.audio) {
				this.audio.md5 = (undefined != this.audio.md5) ? String(this.audio.md5) : '';
				this.audio.url = (undefined != this.audio.url) ? String(this.audio.url) : '';
				this.audio.size = Number(this.audio.size) || 0;
				this.audio.duration = Number(this.audio.duration) || 0;
			};

			this.file = { 'url': '' };
			this.tpl = '';
			if (this.type == APP.cst.OBJ.audio) {
				this.file.url = this.audio.url;
				this.tpl = 'audio';
			} else {
				this.file.url = this.image.large;
				this.tpl = 'picture';
			};

			this.categoryIds = (src.categoryIds && ('object' == typeof src.categoryIds)) ? src.categoryIds : [];
		},

		'bookInterface': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.style = (undefined != src.style) ? String(src.style) : '';
			this.styleText = (undefined != src.styleText) ? String(src.styleText) : '';
			this.type = Number(src.type) || 0;

			var img = [ 'tl', 'tr', 'br', 'bl' ];
			for (var i in img) {
				var k = img[i];
				if (!src[k]) {
					continue;
				};
				this[k] = {
					'url': (undefined != src[k].url) ? String(src[k].url) : '',
					'md5': (undefined != src[k].md5) ? String(src[k].md5) : '',
					'sizel': Number(src[k].size) || 0
				};
			};

			this.categoryIds = (src.categoryIds && ('object' == typeof src.categoryIds)) ? src.categoryIds : [];
		},

		'app': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.description = (undefined != src.description) ? String(src.description) : '';
			this.created = Number(src.created) || 0;
			this.updated = Number(src.updated) || 0;

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.small = (undefined != this.image.small) ? String(this.image.small) : DEFAULT_IMAGE.app.small;
				this.image.medium = (undefined != this.image.medium) ? String(this.image.medium) : DEFAULT_IMAGE.app.medium;
			};

			this.urls = (src.urls && ('object' == typeof src.urls)) ? src.urls : {};
			if (this.urls && APP.cfg.store) {
				for (var i in APP.cfg.store) {
					var s = APP.cfg.store[i];
					this.urls[s] = (undefined != this.urls[s]) ? String(this.urls[s]) : '';
				};
			};

			this.screenshots = [];
			if (src.screenshots) {
				for (var i in src.screenshots) {
					src.screenshots[i].objectId = this.id;
					this.screenshots.push(new APP.model.screenshot(src.screenshots[i]));
				};
			};
		},

		'screenshot': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.name = (undefined != src.name) ? String(src.name) : '';
			this.objectId = (undefined != src.objectId) ? String(src.objectId) : '';

			this.image = (src.image && ('object' == typeof src.image)) ? src.image : {};
			if (this.image) {
				this.image.normal = (undefined != this.image.normal) ? String(this.image.normal) : '';
				this.image.retina = (undefined != this.image.retina) ? String(this.image.retina) : '';
			};
		},

		'subscription': function (source) {
			var src = (source && ('object' == typeof source)) ? source : {};

			this.id = (undefined != src.id) ? String(src.id) : '';
			this.suffix = (undefined != src.suffix) ? String(src.suffix) : '';
			this.price = Number(src.price) || 0;
			this.expire = Number(src.expire) || 0;
			this.active = Boolean(src.active) || false;
			this.created = Boolean(src.created) || false;
		}
	};

})();
