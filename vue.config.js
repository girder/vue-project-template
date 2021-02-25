module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    // If babel ends up being required, this line is necessary. Without it,
    //  it has no effect.
    'vuetify',
  ],
};
