import '../scss/style.scss';
import '../scss/popup.scss';
import '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

Fancybox.bind("[data-fancybox]", {
    dragToClose: false
  });