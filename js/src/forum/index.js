import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';
import CategoriesPage from './components/CategoriesPage';

app.initializers.add('askvortsov/flarum-categories', () => {
  app.routes.categories = { path: '/categories', component: CategoriesPage.component() };

  Tag.prototype.commentCount = Model.attribute('commentCount');
});
