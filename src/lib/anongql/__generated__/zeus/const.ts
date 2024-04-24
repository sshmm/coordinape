/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Int_comparison_exp: {},
  String_comparison_exp: {},
  bigint: 'String',
  bigint_comparison_exp: {
    _eq: 'bigint',
    _gt: 'bigint',
    _gte: 'bigint',
    _in: 'bigint',
    _lt: 'bigint',
    _lte: 'bigint',
    _neq: 'bigint',
    _nin: 'bigint',
  },
  citext: 'String',
  citext_comparison_exp: {
    _eq: 'citext',
    _gt: 'citext',
    _gte: 'citext',
    _ilike: 'citext',
    _in: 'citext',
    _iregex: 'citext',
    _like: 'citext',
    _lt: 'citext',
    _lte: 'citext',
    _neq: 'citext',
    _nilike: 'citext',
    _nin: 'citext',
    _niregex: 'citext',
    _nlike: 'citext',
    _nregex: 'citext',
    _nsimilar: 'citext',
    _regex: 'citext',
    _similar: 'citext',
  },
  colinks_give_count_bool_exp: {
    _and: 'colinks_give_count_bool_exp',
    _not: 'colinks_give_count_bool_exp',
    _or: 'colinks_give_count_bool_exp',
    gives: 'bigint_comparison_exp',
    gives_last_24_hours: 'bigint_comparison_exp',
    gives_last_30_days: 'bigint_comparison_exp',
    gives_last_7_days: 'bigint_comparison_exp',
    skill: 'citext_comparison_exp',
  },
  colinks_give_count_order_by: {
    gives: 'order_by',
    gives_last_24_hours: 'order_by',
    gives_last_30_days: 'order_by',
    gives_last_7_days: 'order_by',
    skill: 'order_by',
  },
  colinks_give_count_select_column: true,
  colinks_give_count_stream_cursor_input: {
    initial_value: 'colinks_give_count_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  colinks_give_count_stream_cursor_value_input: {
    gives: 'bigint',
    gives_last_24_hours: 'bigint',
    gives_last_30_days: 'bigint',
    gives_last_7_days: 'bigint',
    skill: 'citext',
  },
  colinks_gives_aggregate_bool_exp: {
    count: 'colinks_gives_aggregate_bool_exp_count',
  },
  colinks_gives_aggregate_bool_exp_count: {
    arguments: 'colinks_gives_select_column',
    filter: 'colinks_gives_bool_exp',
    predicate: 'Int_comparison_exp',
  },
  colinks_gives_aggregate_fields: {
    count: {
      columns: 'colinks_gives_select_column',
    },
  },
  colinks_gives_aggregate_order_by: {
    avg: 'colinks_gives_avg_order_by',
    count: 'order_by',
    max: 'colinks_gives_max_order_by',
    min: 'colinks_gives_min_order_by',
    stddev: 'colinks_gives_stddev_order_by',
    stddev_pop: 'colinks_gives_stddev_pop_order_by',
    stddev_samp: 'colinks_gives_stddev_samp_order_by',
    sum: 'colinks_gives_sum_order_by',
    var_pop: 'colinks_gives_var_pop_order_by',
    var_samp: 'colinks_gives_var_samp_order_by',
    variance: 'colinks_gives_variance_order_by',
  },
  colinks_gives_avg_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_bool_exp: {
    _and: 'colinks_gives_bool_exp',
    _not: 'colinks_gives_bool_exp',
    _or: 'colinks_gives_bool_exp',
    activity_id: 'bigint_comparison_exp',
    cast_hash: 'String_comparison_exp',
    created_at: 'timestamptz_comparison_exp',
    giver_profile_public: 'profiles_public_bool_exp',
    id: 'Int_comparison_exp',
    profile_id: 'bigint_comparison_exp',
    skill: 'citext_comparison_exp',
    target_profile_id: 'bigint_comparison_exp',
    target_profile_public: 'profiles_public_bool_exp',
    updated_at: 'timestamptz_comparison_exp',
  },
  colinks_gives_max_order_by: {
    activity_id: 'order_by',
    cast_hash: 'order_by',
    created_at: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    skill: 'order_by',
    target_profile_id: 'order_by',
    updated_at: 'order_by',
  },
  colinks_gives_min_order_by: {
    activity_id: 'order_by',
    cast_hash: 'order_by',
    created_at: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    skill: 'order_by',
    target_profile_id: 'order_by',
    updated_at: 'order_by',
  },
  colinks_gives_order_by: {
    activity_id: 'order_by',
    cast_hash: 'order_by',
    created_at: 'order_by',
    giver_profile_public: 'profiles_public_order_by',
    id: 'order_by',
    profile_id: 'order_by',
    skill: 'order_by',
    target_profile_id: 'order_by',
    target_profile_public: 'profiles_public_order_by',
    updated_at: 'order_by',
  },
  colinks_gives_select_column: true,
  colinks_gives_skill_count_bool_exp: {
    _and: 'colinks_gives_skill_count_bool_exp',
    _not: 'colinks_gives_skill_count_bool_exp',
    _or: 'colinks_gives_skill_count_bool_exp',
    gives: 'bigint_comparison_exp',
    gives_last_24_hours: 'bigint_comparison_exp',
    gives_last_30_days: 'bigint_comparison_exp',
    gives_last_7_days: 'bigint_comparison_exp',
    skill: 'citext_comparison_exp',
    target_profile_id: 'bigint_comparison_exp',
    target_profile_public: 'profiles_public_bool_exp',
  },
  colinks_gives_skill_count_order_by: {
    gives: 'order_by',
    gives_last_24_hours: 'order_by',
    gives_last_30_days: 'order_by',
    gives_last_7_days: 'order_by',
    skill: 'order_by',
    target_profile_id: 'order_by',
    target_profile_public: 'profiles_public_order_by',
  },
  colinks_gives_skill_count_select_column: true,
  colinks_gives_skill_count_stream_cursor_input: {
    initial_value: 'colinks_gives_skill_count_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  colinks_gives_skill_count_stream_cursor_value_input: {
    gives: 'bigint',
    gives_last_24_hours: 'bigint',
    gives_last_30_days: 'bigint',
    gives_last_7_days: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
  },
  colinks_gives_stddev_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_stddev_pop_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_stddev_samp_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_stream_cursor_input: {
    initial_value: 'colinks_gives_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  colinks_gives_stream_cursor_value_input: {
    activity_id: 'bigint',
    created_at: 'timestamptz',
    profile_id: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
    updated_at: 'timestamptz',
  },
  colinks_gives_sum_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_var_pop_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_var_samp_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  colinks_gives_variance_order_by: {
    activity_id: 'order_by',
    id: 'order_by',
    profile_id: 'order_by',
    target_profile_id: 'order_by',
  },
  cursor_ordering: true,
  order_by: true,
  profiles_public: {
    colinks_given: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_given_aggregate: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives_aggregate: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
  },
  profiles_public_bool_exp: {
    _and: 'profiles_public_bool_exp',
    _not: 'profiles_public_bool_exp',
    _or: 'profiles_public_bool_exp',
    address: 'String_comparison_exp',
    avatar: 'String_comparison_exp',
    colinks_given: 'colinks_gives_bool_exp',
    colinks_given_aggregate: 'colinks_gives_aggregate_bool_exp',
    colinks_gives: 'colinks_gives_bool_exp',
    colinks_gives_aggregate: 'colinks_gives_aggregate_bool_exp',
    created_at: 'timestamp_comparison_exp',
    description: 'String_comparison_exp',
    id: 'bigint_comparison_exp',
    joined_colinks_at: 'timestamptz_comparison_exp',
    links: 'Int_comparison_exp',
    links_held: 'Int_comparison_exp',
    name: 'citext_comparison_exp',
    post_count: 'bigint_comparison_exp',
    post_count_last_30_days: 'bigint_comparison_exp',
    website: 'String_comparison_exp',
  },
  profiles_public_order_by: {
    address: 'order_by',
    avatar: 'order_by',
    colinks_given_aggregate: 'colinks_gives_aggregate_order_by',
    colinks_gives_aggregate: 'colinks_gives_aggregate_order_by',
    created_at: 'order_by',
    description: 'order_by',
    id: 'order_by',
    joined_colinks_at: 'order_by',
    links: 'order_by',
    links_held: 'order_by',
    name: 'order_by',
    post_count: 'order_by',
    post_count_last_30_days: 'order_by',
    website: 'order_by',
  },
  profiles_public_select_column: true,
  profiles_public_stream_cursor_input: {
    initial_value: 'profiles_public_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  profiles_public_stream_cursor_value_input: {
    created_at: 'timestamp',
    id: 'bigint',
    joined_colinks_at: 'timestamptz',
    name: 'citext',
    post_count: 'bigint',
    post_count_last_30_days: 'bigint',
  },
  query_root: {
    colinks_give_count: {
      distinct_on: 'colinks_give_count_select_column',
      order_by: 'colinks_give_count_order_by',
      where: 'colinks_give_count_bool_exp',
    },
    colinks_gives: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives_aggregate: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives_by_pk: {},
    colinks_gives_skill_count: {
      distinct_on: 'colinks_gives_skill_count_select_column',
      order_by: 'colinks_gives_skill_count_order_by',
      where: 'colinks_gives_skill_count_bool_exp',
    },
    price_per_share: {},
    profiles_public: {
      distinct_on: 'profiles_public_select_column',
      order_by: 'profiles_public_order_by',
      where: 'profiles_public_bool_exp',
    },
  },
  subscription_root: {
    colinks_give_count: {
      distinct_on: 'colinks_give_count_select_column',
      order_by: 'colinks_give_count_order_by',
      where: 'colinks_give_count_bool_exp',
    },
    colinks_give_count_stream: {
      cursor: 'colinks_give_count_stream_cursor_input',
      where: 'colinks_give_count_bool_exp',
    },
    colinks_gives: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives_aggregate: {
      distinct_on: 'colinks_gives_select_column',
      order_by: 'colinks_gives_order_by',
      where: 'colinks_gives_bool_exp',
    },
    colinks_gives_by_pk: {},
    colinks_gives_skill_count: {
      distinct_on: 'colinks_gives_skill_count_select_column',
      order_by: 'colinks_gives_skill_count_order_by',
      where: 'colinks_gives_skill_count_bool_exp',
    },
    colinks_gives_skill_count_stream: {
      cursor: 'colinks_gives_skill_count_stream_cursor_input',
      where: 'colinks_gives_skill_count_bool_exp',
    },
    colinks_gives_stream: {
      cursor: 'colinks_gives_stream_cursor_input',
      where: 'colinks_gives_bool_exp',
    },
    profiles_public: {
      distinct_on: 'profiles_public_select_column',
      order_by: 'profiles_public_order_by',
      where: 'profiles_public_bool_exp',
    },
    profiles_public_stream: {
      cursor: 'profiles_public_stream_cursor_input',
      where: 'profiles_public_bool_exp',
    },
  },
  timestamp: 'String',
  timestamp_comparison_exp: {
    _eq: 'timestamp',
    _gt: 'timestamp',
    _gte: 'timestamp',
    _in: 'timestamp',
    _lt: 'timestamp',
    _lte: 'timestamp',
    _neq: 'timestamp',
    _nin: 'timestamp',
  },
  timestamptz: 'String',
  timestamptz_comparison_exp: {
    _eq: 'timestamptz',
    _gt: 'timestamptz',
    _gte: 'timestamptz',
    _in: 'timestamptz',
    _lt: 'timestamptz',
    _lte: 'timestamptz',
    _neq: 'timestamptz',
    _nin: 'timestamptz',
  },
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: 'Int',
    refresh: 'Boolean',
  },
  colinks_give_count: {
    gives: 'bigint',
    gives_last_24_hours: 'bigint',
    gives_last_30_days: 'bigint',
    gives_last_7_days: 'bigint',
    skill: 'citext',
  },
  colinks_gives: {
    activity_id: 'bigint',
    cast_hash: 'String',
    created_at: 'timestamptz',
    giver_profile_public: 'profiles_public',
    id: 'Int',
    profile_id: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
    target_profile_public: 'profiles_public',
    updated_at: 'timestamptz',
  },
  colinks_gives_aggregate: {
    aggregate: 'colinks_gives_aggregate_fields',
    nodes: 'colinks_gives',
  },
  colinks_gives_aggregate_fields: {
    avg: 'colinks_gives_avg_fields',
    count: 'Int',
    max: 'colinks_gives_max_fields',
    min: 'colinks_gives_min_fields',
    stddev: 'colinks_gives_stddev_fields',
    stddev_pop: 'colinks_gives_stddev_pop_fields',
    stddev_samp: 'colinks_gives_stddev_samp_fields',
    sum: 'colinks_gives_sum_fields',
    var_pop: 'colinks_gives_var_pop_fields',
    var_samp: 'colinks_gives_var_samp_fields',
    variance: 'colinks_gives_variance_fields',
  },
  colinks_gives_avg_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_max_fields: {
    activity_id: 'bigint',
    cast_hash: 'String',
    created_at: 'timestamptz',
    id: 'Int',
    profile_id: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
    updated_at: 'timestamptz',
  },
  colinks_gives_min_fields: {
    activity_id: 'bigint',
    cast_hash: 'String',
    created_at: 'timestamptz',
    id: 'Int',
    profile_id: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
    updated_at: 'timestamptz',
  },
  colinks_gives_skill_count: {
    gives: 'bigint',
    gives_last_24_hours: 'bigint',
    gives_last_30_days: 'bigint',
    gives_last_7_days: 'bigint',
    skill: 'citext',
    target_profile_id: 'bigint',
    target_profile_public: 'profiles_public',
  },
  colinks_gives_stddev_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_stddev_pop_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_stddev_samp_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_sum_fields: {
    activity_id: 'bigint',
    id: 'Int',
    profile_id: 'bigint',
    target_profile_id: 'bigint',
  },
  colinks_gives_var_pop_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_var_samp_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  colinks_gives_variance_fields: {
    activity_id: 'Float',
    id: 'Float',
    profile_id: 'Float',
    target_profile_id: 'Float',
  },
  profiles_public: {
    address: 'String',
    avatar: 'String',
    colinks_given: 'colinks_gives',
    colinks_given_aggregate: 'colinks_gives_aggregate',
    colinks_gives: 'colinks_gives',
    colinks_gives_aggregate: 'colinks_gives_aggregate',
    created_at: 'timestamp',
    description: 'String',
    id: 'bigint',
    joined_colinks_at: 'timestamptz',
    links: 'Int',
    links_held: 'Int',
    name: 'citext',
    post_count: 'bigint',
    post_count_last_30_days: 'bigint',
    website: 'String',
  },
  query_root: {
    colinks_give_count: 'colinks_give_count',
    colinks_gives: 'colinks_gives',
    colinks_gives_aggregate: 'colinks_gives_aggregate',
    colinks_gives_by_pk: 'colinks_gives',
    colinks_gives_skill_count: 'colinks_gives_skill_count',
    price_per_share: 'Float',
    profiles_public: 'profiles_public',
  },
  subscription_root: {
    colinks_give_count: 'colinks_give_count',
    colinks_give_count_stream: 'colinks_give_count',
    colinks_gives: 'colinks_gives',
    colinks_gives_aggregate: 'colinks_gives_aggregate',
    colinks_gives_by_pk: 'colinks_gives',
    colinks_gives_skill_count: 'colinks_gives_skill_count',
    colinks_gives_skill_count_stream: 'colinks_gives_skill_count',
    colinks_gives_stream: 'colinks_gives',
    profiles_public: 'profiles_public',
    profiles_public_stream: 'profiles_public',
  },
};

export const Ops = {
  query: 'query_root' as const,
  subscription: 'subscription_root' as const,
};
