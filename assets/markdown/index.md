# 프로젝트 소개

## WARD SHOP


# 스토리 북 사용 법

## Knobs

## Info(Vue)


# 프론트엔드 설계 방식

## 아토믹 디자인

## UNITS(ATOM)

## BLOCKS(MOLECULE)

## SECTIONS(ORGANISM)

## TEMPLATE

## PAGE





# 백엔드 데이터 바인딩 및 요청 방식

## IMPORT

백엔드 통신과 관련된 모든 상태와 메서드는 VUEX 상에서 작성됩니다. 따라서 이들을 끌어쓰기 위해서는 VUEX store 로부터 상태 혹은 메서드들을 가져와서 페이지 내에 붙여야 합니다.

Vuex store에 접근하는 방법은 여러가지가 있지만 가장 좋은 방법은 여러개의 상태와 메서드에 한번에 접근할 수 있는 mapping 메서드들을 가져다가 쓰는 것입니다.

<pre>
<code>
import { mapState, mapGetters, mapMutation, mapActions } from 'vuex';

</code>
</pre>

위의 코드를 통해 mapping 메서드들을 가져오고

### Vuex State Import
<pre>
<code>
export default {
  ...
  computed: {
    ...mapState(파일이름, {
      이름: state => state.상태이름,
    })
  }
}
</code>
</pre>
### Vuex Getters Import
<pre>
<code>
export default {
  ...
  computed: {
    ...mapGetters(파일이름, [...게터들])
  }
}
</code>
</pre>
<pre>
<code>
### Vuex Mutation Import
<pre>
<code>
export default {
  ...
  methods: {
    ...mapMutations(파일이름, [...변이들])
  }
}
</code>
</pre>
### Vuex Actions Import
<pre>
<code>
export default {
  ...
  methods: {
    ...mapGetters(파일이름, [...액션들])
  }
}
</code>
</pre>