  window.addEventListener('DOMContentLoaded', () => {

    console.log('loaded');

    const $dom = document;

    // mobileナビゲーションの表示 .activeを付与
    const openNav = () => {
      const $trigerIcon = $dom.querySelector('.openMenu');
      const $targetNav = $dom.querySelector('.navMobile');

      $trigerIcon.addEventListener('click', () => {

        if($targetNav.classList.contains('.active') === false) {
          $targetNav.classList.add('.active');
        }
      });
    }
    openNav();

    // mobileナビゲーションの非表示 .activeを消去
    const closeNav = () => {
      const $trigerIcon = $dom.querySelector('.closeMenu');
      const $targetNav = $dom.querySelector('.navMobile');

      $trigerIcon.addEventListener('click', () => {
        
        if($targetNav.classList.contains('.active') === true) {
          $targetNav.classList.remove('.active');
        }
      });
    }
    closeNav();

      // ページ下部のレポート専用
      const reportAction = () => {
        const $triger = $dom.querySelector('.report-icon');
        const $targetBox = $dom.querySelector('.report');
        const $target =$dom.querySelector('.report-text');
        
        $triger.addEventListener('click', () => {
          if($target.classList.contains('active') === false) {

            $triger.classList.add('rotate');
            $targetBox.classList.add('active');
            $target.classList.add('active');
          } else {
            
            $triger.classList.remove('rotate');
            $targetBox.classList.remove('active');
            $target.classList.remove('active');
          }
        });
      }
      reportAction();
      // ページ下部のレポート専用
    
  });