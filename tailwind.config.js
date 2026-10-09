module.exports = {
  prefix: 'tw-',
  corePlugins: { preflight: false },
  content: ['./*.html', './modules/*.html', './assets/js/*.js'],
  theme: { extend: { colors: {
    ink: '#1B1F27', graphite: '#262B36', mist: '#F4F5F7',
    brand: '#FF7A1A', azure: '#1E6BFF' } } }
};
