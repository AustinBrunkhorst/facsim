import ProjectResolver from './project.resolver';
import TaskResolver from './task.resolver';

const resolvers = require.context('.', true, /(.*)\.resolver\.ts$/);

console.log('wow, resolvers!', resolvers.keys().map(path => resolvers.resolve(path)));

export default [ProjectResolver, TaskResolver] as any[];