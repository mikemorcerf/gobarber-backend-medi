import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
	handleBars: HandlebarsMailTemplateProvider,
};

container.register<IMailTemplateProvider>(
	'MailTemplateProvider',
	providers.handleBars,
);
