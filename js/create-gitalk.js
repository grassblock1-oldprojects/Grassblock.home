const gitalk = new Gitalk({
  clientID: 'Iv1.bc62e3e249198e35',
  clientSecret: '9b51ea47f4368923814e0a8bf0a3d5d6ae898bcf',
  repo: 'teamc',
  owner: 'Grassblock1',
  admin: ['Grassblock1'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})
gitalk.render('gitalk')